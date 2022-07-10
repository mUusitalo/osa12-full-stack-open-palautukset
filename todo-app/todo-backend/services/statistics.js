const redis = require('../redis')

const TODO_COUNTER_KEY = 'added_todos'

async function getNumberOfAddedTodos() {
  const valueInDb = await redis.getAsync(TODO_COUNTER_KEY)
  return valueInDb ? parseInt(valueInDb) : 0
}

async function incrementNumberOfAddedtodos() {
  return await redis.incrSync(TODO_COUNTER_KEY)
}

module.exports = { getNumberOfAddedTodos, incrementNumberOfAddedtodos }
