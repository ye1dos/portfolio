///-Config-//////
const express = require('express');
require('dotenv/config')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const {verify} = require('jsonwebtoken')
const {hash, compare} = require('bcryptjs')
const app = express();

const {db} = require('./db');
const { createAccessToken, createRefreshToken, sendAccess, sendRefresh} = require('./tokens');
// middlewares
app.use(cookieParser())
app.use(cors(
    {
        origin: 'http://localhost:3000',
        credentials: true,
    }
))

// reading body data
app.use(express.json())
app.use(express.urlencoded({extended: true}))
////////////////


// register user

//login user

//logout user

// setup protected route

//get new accesstoken with refreshtoken


 app.get('/', (req, res) =>
 {
    res.send("Bratshke")
 })
 app.post('/register', async(req, res) => {
     const {login, password} = req.body;

     try{
        const user = db.find(user => user.login === login)
        if(user) {throw new Error("Already exists")}

        const pass_hashed = await hash(password, 10)
        
        db.push({
            id: db.length,
            login,
            password: pass_hashed
        })
        res.send({message: 'User created'})
        console.log(db)
    }
     catch (err) {
        res.send({error: err.message})
     }
 })

 app.post('/login', async (req, res) => {
     const {login, password}  = req.body;
     try{
        const user = db.find(user => user.login === login)
        if(!user) {throw new Error("not exist")}

        const valid = await compare(password, user.password)
        if(!valid) throw new Error('passwords not match')
        // creating tokens
        const accessToken = createAccessToken(user.id)
        const refreshToken = createRefreshToken(user.id)
        // putting refreshtoken to db
        user.refreshToken = refreshToken
        console.log(db)

        sendAccess(req, res, accessToken)
        sendRefresh(req, res, refreshToken)
    }
     catch (err) {
        res.send({error: err.message})
     }

 })
 
 app.post('/logout', (req, res) => {
     res.clearCookie('refreshtoken')
     res.send({message: 'Logged out'})
 })
 
 app.listen(process.env.PORT, () => console.log(`Success on ${process.env.PORT}`))


 // 41 minuta