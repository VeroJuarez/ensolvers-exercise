const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const db = require('./src/db')

const PORT = process.env.PORT || 4000

const toDoController = require('./src/controllers/toDoController')

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.listen(PORT, () => {
	console.log(`App corriendo en puerto ${PORT}.`)
})

app.get('/init', (req, res) => {
  const sqlQuery =  'CREATE TABLE IF NOT EXISTS emails(id int AUTO_INCREMENT, firstname VARCHAR(50), lastname VARCHAR(50), email VARCHAR(50), PRIMARY KEY(id))';

  db.query(sqlQuery, (err) => {
      if (err) throw err;
      res.send('Tabla de To-Dos creada')
  });
});

app.use('/todo', toDoController)
