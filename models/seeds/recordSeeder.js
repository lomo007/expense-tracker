const bcrypt = require('bcryptjs')
const Category = require('../category')
const Record = require('../record')
const User = require('../user')
const { records, users } = require('./data')
const db = require('../../config/mongoose')

db.once('open', async () => {
  console.log('Seeds start.')

  try {
    const categories = await Category.find().lean()

    await Promise.all(
      users.map(async user => {
        const { name, email, password, recordIndex } = user
        // recordIndex seperate data

        const userCreated = await User.create({
          name,
          email,
          password: bcrypt.hashSync(password, 10)
        })
        // user model

        const recordData = recordIndex.map(index => {
          const record = records[index]
          const categoriesData = categories.find(
            element => record.category === element.name
          )
          record.categoryId = categoriesData._id
          record.userId = userCreated._id
          delete record.category
          return record
        })
        await Record.insertMany(recordData)
        // arrange records and create model
      })
    )
    console.log('Seeds end.')
    db.close()
  } catch (error) {
    console.log(error)
  } finally {
    process.exit()
  }
})
