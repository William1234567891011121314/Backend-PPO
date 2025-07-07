import express from 'express'
import cors from 'cors'
import mongoose from "mongoose"
import {LogUser, newUser, getSession} from './database'
import dotenv from 'dotenv'
import session from 'express-session'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000


app.use(cors())
app.use(express.json())
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false,
}))
app.use(() => {

})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

console.log(process.env.DATABASE_URL)
mongoose.connect(process.env.DATABASE_URL!)

newUser(app)
LogUser(app)
getSession(app)