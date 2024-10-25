const express = require('express')
const app = express()
const port = 3000

const secret = 'secret'
const userModel = require('../backend/models/userModel')

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const bodyParser = require('body-parser')
var cors = require('cors')

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Zidio Development')
})

app.post('/signup', async (req, res) => {
    
    let {name, email, password, username } = req.body
    let emailCon = await userModel.findOne({ email: email })

    if (emailCon) {
        return res.json({success: false, message: "email already exists" })
    }
    else {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
                if (err) {
                    throw err
                }
                let user = await userModel.create({
                    name: name,
                    email: email,
                    password: hash,
                    username: username,
                })
                res.json({success: true, message: 'User registered successfully', userID: user._id})
            });
        });
    }
})

app.post('/login', async (req, res) => {
    
    let {email, password } = req.body
    let user = await userModel.findOne({ email: email })

    if (user) {
        bcrypt.compare(password, user.password, (err, result) => {
            if (result) {
              var token = jwt.sign({ email: user.email, userId: user._id}, secret);
              res.json({success: true, message: "Login Successful", userId: user._id, token: token})
            }
            else{
              res.json({success: false, message: "Invalid password"})
            }
          });
    } 
    else {
        res.json({success: false, message: "Invalid email"})
    }

})

app.post('/logout', async (req, res) => {
    
    let { userId } = req.body
    let user = await userModel.findById(userId)

    if (user) {
        res.json({success: true, message: "Logout Successful", user: user})
    }
    else {
        res.json({success: false, message: "User does not exists"})
    }
})

app.post('/fetchUser', async (req, res) => {
    
    let { userId } = req.body
    let user = await userModel.findById(userId)

    if (user) {
        res.json({success: true, message: "User fetched Successfully", user: user})
    }
    else {
        res.json({success: false, message: "User does not exists"})
    }
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})