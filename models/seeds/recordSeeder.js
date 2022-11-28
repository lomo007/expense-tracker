const bcrypt = require('bcryptjs')
const Category = require('../category')
const Record = require('../record')
const User = require('../user')
const { records, users } = require('./data')
const db = require('../../config/mongoose')

db.once('open', () => {
  Promise.all([
    users.map(user => {
      user.password = bcrypt.hashSync(user.password, 10)
      return User.create(user)
    }),
    // 匯入Record 加上userId categoryI
    Promise.all(records.map((record) => {
      const { name, date, amount, categoryId, userId } = record
      return Category.findOne({ name: categoryId })
        .lean()
        .then(category => {
          const categoryId = category._id
          return User.findOne({ name: userId })
            .lean()
            .then(user => {
              const userId = user._id
              return Record.create({ name, date, amount, categoryId, userId })
            })
            .catch(error => console.log(error))
        })
    }))
  ]).then(() => {
    console.log('recordSeeds done.')
    process.exit() // 自動跳轉到下個命令欄 不用再ctrl+c
  })
    .catch(error => console.log(error))
})
