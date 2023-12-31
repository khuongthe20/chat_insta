const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
require('dotenv').config()
const routes = require('./routes')
const app = express()
const bodyParser = require('body-parser')
const server = require('http').Server(app)
const cors = require('cors')

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api/v1', routes)

// error handler
const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
        error: {
            message: err.message,
        },
    })
}
app.use(errorHandler)

const port = process.env.APP_PORT
const address = process.env.APP_ADDRESS

server.listen(port, address, () => {
    console.log(`Server listening on http://localhost:${port}`)
})