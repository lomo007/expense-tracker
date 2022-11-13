const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recordSchema = new Schema({
  name: {
    type: String
  },
  date: {
    type: Date
  },
  amount: {
    type: Number
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    index: true,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    index: true,
    required: true
  }
})
module.exports = mongoose.model('Record', recordSchema)
