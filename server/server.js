const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())








let {landingPage, homeCss, homeJs} = require('./controllers/controller')
app.get('/', landingPage)
app.get('/css', homeCss)
app.get("/js", homeJs)

const {PORT} = process.env

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))