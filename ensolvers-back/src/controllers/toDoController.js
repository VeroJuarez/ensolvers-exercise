const express = require('express')
const db = require('../db')

const router = express.Router()

router.post('/', (req, res) => {
	const todo = {
		title: req.body.title,
		iscompleted: false,
	}
	db.query('INSERT INTO todos SET ?', todo, (err, result) => {
		if (err) throw err
		res.send(result)
	})
})

router.get('/', (req, res) => {
	db.query('SELECT * FROM todos', (err, result) => {
		if (err) throw err
		res.json(result)
	})
})

router.get('/:id', (req, res) => {
	db.query(
		'SELECT * FROM todos WHERE id = ?',
		parseInt(req.params.id),
		(err, result) => {
			if (err) throw err
			res.json(result)
		}
	)
})

router.put('/:id', (req, res) => {
	db.query(
		'UPDATE todos SET title = ? WHERE id = ?',
		[req.body.title, req.params.id],
		(err, result) => {
			if (err) throw err
			res.json(result)
		}
	)
})

router.put('/mark/:id', (req, res) => {
	db.query(
		'UPDATE todos SET iscompleted = ? WHERE id = ?',
		[req.body.title, req.params.id],
		(err, result) => {
			if (err) throw err
			res.json(result)
		}
	)
})

router.delete('/:id', (req, res) => {
	db.query(
		'DELETE FROM todos WHERE id = ?',
		parseInt(req.params.id),
		(err, result) => {
			if (err) throw err
			res.json(result)
		}
	)
})

module.exports = router
