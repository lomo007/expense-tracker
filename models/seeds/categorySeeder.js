const Category = require('../category')
const db = require('../../config/mongoose')
const { categories } = require('./data')

// 連線成功
db.once('open', () => {
  Category.insertMany(categories)
    .then(() => {
      console.log('categorySeeds done.')
      process.exit()
    })
    .catch(error => console.log(error))
})
