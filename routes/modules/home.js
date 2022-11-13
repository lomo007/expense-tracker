// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const Record = require('../../models/record')

// 渲染現有資料到首頁  //*1 根據 _id 升冪排序
router.get('/', (req, res) => {
  const userId = req.user._id
  Record.find({ userId })
    .populate('categoryId', { icon: true })
    .lean()
    .sort({ date: 'desc' }) //* 1
    .then(record => {
      let totalAmount = 0
      if (record.length) {
        record.forEach(amounts => {
          amounts.date = amounts.date.toLocaleDateString(undefined, { year: 'numeric', month: '2-digit', day: '2-digit' })
          totalAmount += amounts.amount
        })
        res.render('index', { record, totalAmount })
      } else {
        res.render('noRecordindex', { totalAmount })
      }
    })
    .catch(error => console.error(error))
})

// 匯出路由模組
module.exports = router
