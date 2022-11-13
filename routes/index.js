// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

const home = require('./modules/home') // 引入 home 模組程式碼
const records = require('./modules/records') // 引入 todos 模組程式碼
const users = require('./modules/users')
const auth = require('./modules/auth')

const { authenticator } = require('../middleware/auth')

router.use('/users', users)
router.use('/auth', auth)
router.use('/records', authenticator, records)
router.use('/', authenticator, home)

// 匯出路由器
module.exports = router
