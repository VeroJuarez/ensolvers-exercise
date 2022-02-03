const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

const PORT = process.env.PORT || 4000

const toDoController = require('./src/controllers/toDoController')

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.listen(PORT, () => {
	console.log(`App corriendo en puerto ${PORT}.`)
})

app.use('/todo', toDoController)
