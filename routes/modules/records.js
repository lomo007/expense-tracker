// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 model
const Record = require('../../models/record')
const Category = require('../../models/category')
const dayjs = require('dayjs')

router.get('/search', (req, res) => {
  const userId = req.user._id
  const categorySort = req.query.filter
  return Category.findOne({ name: categorySort })
    .then(categorySortList => {
      const categoryId = categorySortList._id
      return Record.find({ userId, categoryId })
        .populate('categoryId', { icon: true })
        .lean()
        .sort({ date: 'desc' })
        .then(record => {
          let totalAmount = 0
          if (record.length) {
            record.forEach(amounts => {
              amounts.date = dayjs(amounts.date).format('YYYY-MM-DD')
              totalAmount += amounts.amount
            })
            res.render('index', { record, totalAmount, categorySort })
          } else {
            res.render('noRecordindex', { totalAmount, categorySort })
          }
        })
        .catch(error => console.error(error))
    })
    .catch(error => console.error(error))
})

// 設定新增頁面路由
router.get('/new', (req, res) => {
  return Category.find()
    .lean()
    .then(category => {
      res.render('new', { category }) // 從 select 拿到值
    })
    .catch(error => console.error(error))
})

router.post('/new', (req, res) => {
  const userId = req.user._id
  const { name, date, amount, category } = req.body // 從 select 拿到值
  console.log(req.body)
  return Category.findOne({ name: category })
    .then(categorys => {
      const categoryId = categorys._id
      return Record.create({ name, date, amount, categoryId, userId })
        .then(() => res.redirect('/'))
        .catch(error => console.error(error))
    })
})

router.get('/:id/edit', (req, res) => {
  const userId = req.user._id
  const id = req.params.id
  return Record.findOne({ userId })
    .populate('categoryId', { name: true })
    .lean()
    .then((record) => {
      record.date = dayjs(record.date).format('YYYY-MM-DD')
      res.render('edit', { record })
    })
    .catch(error => console.error(error))
})

router.put('/:id', (req, res) => {
  const userId = req.user._id
  const { name, date, amount, category } = req.body
  return Category.findOne({ name: category })
    .then(category => {
      const categoryId = category._id
      return Record.findOne({ userId })
        .then(record => { //* ****/  record = Object.assign(record, req.body) ?? //*
          record.name = name
          record.date = date
          record.amount = amount
          record.categoryId = categoryId
          record.save()
        })
        .then(() => res.redirect('/'))
        .catch(error => console.error(error))
    })
    .catch(error => console.error(error))
})

router.delete('/:id', (req, res) => {
  const userId = req.user._id
  return Record.findOne({ userId }) // route的操作都要經過 authenticator的允許> 用userId去找 再刪除
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.error(error))
})

// 匯出路由模組
module.exports = router
