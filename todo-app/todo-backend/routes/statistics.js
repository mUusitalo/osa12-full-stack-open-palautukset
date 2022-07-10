const express = require('express')
const router = express.Router()
const statistics = require('../services/statistics')

router.get('/', async (_, res) => {
  const count = await statistics.getNumberOfAddedTodos()
  res.json({ added_todos: count })
})

module.exports = router