const categorySeeds = require('../../category.json').results
const Category = require('../category')
const db = require('../../config/mongoose')

// 連線成功
db.once('open', () => {
  Category.insertMany(categorySeeds)
    .then(() => {
      console.log('categorySeeds done.')
      process.exit()
    })
    .catch(error => console.log(error))
})
