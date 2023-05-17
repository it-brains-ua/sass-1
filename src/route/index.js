// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('index', {
    // вказуємо назву папки контейнера, в якій знаходяться наші стилі
    style: 'index',
    // layout потрібно підключати у форматі layout:'<folder_name>/index'
    layout: 'background/index',
    chats: [
      {
        name: 'James Anderson',
        message:
          'Mem Ipsum is simply dummy text of the printing and type setting industry.',
        img: 'dist/img/user1.png',
        status: { text: 'Pending', class: 'pending' },
      },
      {
        name: 'Michael Jorden',
        message:
          'Mem Ipsum is simply dummy text of the printing and type setting industry.',
        img: 'dist/img/user2.png',
        status: { text: 'Approved', class: 'approved' },
      },
      {
        name: 'Johnathan Doeting',
        message:
          'Mem Ipsum is simply dummy text of the printing and type setting industry.',
        img: 'dist/img/user3.png',
        status: { text: 'Approved', class: 'approved' },
      },
      {
        name: 'Daniel Kristeen',
        message:
          'Mem Ipsum is simply dummy text of the printing and type setting industry.',
        img: 'dist/img/user.png',
        status: { text: 'Pending', class: 'pending' },
      },
      {
        name: 'Jan Petrovic',
        message:
          'Mem Ipsum is simply dummy text of the printing and type setting industry.',
        img: 'dist/img/user5.png',
        status: { text: 'rejected', class: 'rejected' },
      },
    ],
    costs: [
      {
        text: 'Wallet Balance',
        price: '$3,567.53',
        class: 'balance',
      },
      {
        text: 'Referral Earnings',
        price: '$769.08',
        class: 'ref-earning',
      },
      {
        text: 'Estimate Sales',
        price: '$5,489',
        class: 'sales',
      },
      {
        text: 'Earnings',
        price: '$23,568',
        class: 'earnings',
      },
    ],
  })
  // ↑↑ сюди вводимо JSON дані
})

// ================================================================

router.get('/import', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('import', {
    style: 'import',
  })
  // ↑↑ сюди вводимо JSON дані
})

router.get('/use', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('use', {
    style: 'use',
  })
  // ↑↑ сюди вводимо JSON дані
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
