const bcrypt = require('bcryptjs')
const Category = require('../category')
const Record = require('../record')
const User = require('../user')
const recordSeeds = require('../../record.json').results
const userSeeds = require('../../user.json').results
const db = require('../../config/mongoose')

// 連線成功
// 匯入使用者種子資料並加鹽
db.once('open', () => {
  Promise.all([
    userSeeds.map(user => {
      user.password = bcrypt.hashSync(user.password, 10)
      return User.create(user)
    }),
    // 匯入Record 加上userId categoryI
    Promise.all(recordSeeds.map((record) => {
      const { name, date, amount, categoryId, userId } = record
      return Category.findOne({ name: categoryId })
        .then(category => {
          const categoryId = category._id
          return User.findOne({ name: userId })
            .then(user => {
              const userId = user._id
              return Record.create({ name, date, amount, categoryId, userId })
            })
            .catch(error => console.log(error))
        })
        .catch(error => console.log(error))
    })
    )
  ]).then(() => {
    console.log('recordSeeds done.')
    process.exit() // 自動跳轉到下個命令欄 不用再ctrl+c
  })
    .catch(error => console.log(error))
})
