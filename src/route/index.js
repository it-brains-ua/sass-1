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
  res.render('index', { style: 'index.css' })
  // ↑↑ сюди вводимо JSON дані
})

router.get('/new', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('new', { style: 'new.css' })
  // ↑↑ сюди вводимо JSON дані
})

// ================================================================

// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙️ сюди вводимо JSON дані

    page: {
      title: 'Resume',
    },

    header: {
      name: {
        firstname: 'Ivan',
        lastname: 'Ivanov',
      },
      position: 'Junior Fullstack JS developer',
      salary: '600$ в місяць',
    },

    main: {
      summary: {
        sammary: {
          title: 'Summary',
          text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start towork on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.',
        },

        experience: {
          title: 'Other experience',
          text: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.',
        },
      },

      footer: {
        social: {
          email: {
            text: 'ivanov@mail.com',
            href: 'mailto: ivanov@mail.com',
          },
          phone: {
            text: '+380670000123',
            href: 'tel:+380670000123',
          },
          linkedin: {
            href: 'https://www.linkedin.com/in/dmytro-tes',
            text: 'linkedin',
          },
        },
      },
    },
  })
})

// ================================================================

// ================================================================

// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙️ сюди вводимо JSON дані

    page: {
      title: 'Resume',
    },

    header: {
      name: {
        firstname: 'Ivan',
        lastname: 'Ivanov',
      },
      position: 'Junior Fullstack JS developer',
      salary: '600$ в місяць',
    },

    main: {
      summary: {
        sammary: {
          title: 'Summary',
          text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start towork on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.',
        },

        experience: {
          title: 'Other experience',
          text: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.',
        },
      },

      footer: {
        social: {
          email: {
            text: 'ivanov@mail.com',
            href: 'mailto: ivanov@mail.com',
          },
          phone: {
            text: '+380670000123',
            href: 'tel:+380670000123',
          },
          linkedin: {
            href: 'https://www.linkedin.com/in/dmytro-tes',
            text: 'linkedin',
          },
        },
      },
    },
  })
})

// Підключаємо роутер до бек-енду
module.exports = router
