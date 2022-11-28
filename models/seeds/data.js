const categories = [
  {
    name: '家居物業',
    icon: 'fa-solid fa-house'
  },
  {
    name: '交通出行',
    icon: 'fa-solid fa-van-shuttle'
  },
  {
    name: '休閒娛樂',
    icon: 'fa-solid fa-face-grin-beam'
  },
  {
    name: '餐飲食品',
    icon: 'fa-solid fa-utensils'
  },
  {
    name: '其他',
    icon: 'fa-solid fa-pen'
  }
]

const records = [
  {
    name: '午餐',
    date: '2021-04-23',
    amount: 60,
    categoryId: '餐飲食品',
    userId: '廣志'
  },
  {
    name: '晚餐',
    date: '2021-04-23',
    amount: 60,
    categoryId: '餐飲食品',
    userId: '廣志'
  },
  {
    name: '捷運',
    date: '2021-04-23',
    amount: 120,
    categoryId: '交通出行',
    userId: '廣志'
  },
  {
    name: '電影:驚奇隊長',
    date: '2021-04-23',
    amount: 220,
    categoryId: '休閒娛樂',
    userId: '小新'
  },
  {
    name: '租金',
    date: '2015-04-01',
    amount: 25000,
    categoryId: '家居物業',
    userId: '廣志'
  }
]

const users = [
  {
    name: '廣志',
    email: 'user1@example.com',
    password: '12345678'
  },
  {
    name: '小新',
    email: 'user2@example.com',
    password: '12345678'
  }
]

module.exports = { categories, records, users }
