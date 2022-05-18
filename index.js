// https://blog.nerdjfpb.com/how-to-build-simple-crud-restful-api-with-nodejs-expressjs-and-mongodb-in-2022/
// git commit -m "message" --no-verify
import'dotenv/config'
// to acces .env variables ------ process.env.VARIBALE_NAME
import Express from 'express'
import Cors from 'cors'
import Helmet from 'helmet'
import RateLimit from 'express-rate-limit'
import Morgan from 'morgan'
import Mongoose from'mongoose'

const limiter = RateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100, 
    standardHeaders: true,
    legacyHeaders: false, 
})

Mongoose.connect('mongodb://localhost/demotodo')	 
.then(() => console.log('Connected to MongoDB...'))	 
.catch((err)=>console.log(`Could not connect to MongoDB...${err}`))

app.use(Morgan('tiny'))
app.use(limiter)
app.use(Cors()) 
app.use(Helmet())
app.use(Express.json())

/**
/app/v1 -> Post -> add a data to database
/api/v1 -> Get -> get all the data from database
/app/v1/id -> Get -> get a single item data by id from database
/app/v1 -> Delete -> delete a data from database
/app/v1 -> Put -> update a data from database
*/

const app = Express()

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`listening on port ${port}`))