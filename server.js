const express = require('express')
const bodyParser = require('body-parser')
const dotEnv = require('dotenv');
const cors  = require('cors');
const dbConnection = require('./database/connection')
const router = require('./network/routers')

dotEnv.config();

var app = express()

// db connection
dbConnection();

app.unsubscribe(cors())
app.use(bodyParser.json())

router(app)


app.use('/app', express.static('public'))
const PORT = process.env.PORT || 3000;

app.listen(PORT)


console.log('Escuchando en http://localhost:3001');