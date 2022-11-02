const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())








let {landingPage} = require('./controllers/controller')
app.get('/', landingPage)

const {PORT} = process.env

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))