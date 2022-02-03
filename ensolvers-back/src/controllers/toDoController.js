const express = require('express');

const router = express.Router();

const todos = [
  { id: 1, title: 'Tomar mates', isCompleted: true },
  { id: 2, title: 'Implementar todos', isCompleted: false },
]

router.get('/', (req, res) => {
	res.send(todos)
})

router.get('/:id', (req, res) => {
  res.send(todos.find(todo => todo.id === parseInt(req.params.id)))
})

module.exports = router;