import express from 'express'
import bodyParser from 'body-parser'
import { reqLog } from './middleware/logger'

// InitApp
const app = express()


// // Middleware init
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// logger
app.use(reqLog)