const bcrypt = require('bcryptjs')
const Category = require('../category')
const Record = require('../record')
const User = require('../user')
const { records, users } = require('./data')
const db = require('../../config/mongoose')

db.once('open', async () => { //* async
  Promise.all([
    await users.map(user => { //* await等 User創建完
      user.password = bcrypt.hashSync(user.password, 10)
      return User.create(user)
    }),
    Promise.all(
      records.map((record) => {
        const { categoryId, userId } = record
        return Category.findOne({ name: categoryId })
          .lean()
          .then(category => {
            record.categoryId = category._id
            console.log(userId, record.userId)
            return User.findOne({ name: record.userId }) //* userId/record.userId
              .lean()
              .then(user => {
                record.userId = user._id //* 錯誤訊息_id of null (非同步 等User創建完成)
                return Record.create(record)
              })
              .catch(error => console.log(error))
          })
      })
    )
  ])
    .then(() => {
      console.log('recordSeeds done.')
      process.exit() // 自動跳轉到下個命令欄 不用再ctrl+c
    })
    .catch(error => console.log(error))
})
