import express from 'express'
import cors from 'cors'
import mongoose from "mongoose"
import newUser from './database'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

console.log(process.env.DATABASE_URL)
mongoose.connect(process.env.DATABASE_URL!)

newUser(app, mongoose)