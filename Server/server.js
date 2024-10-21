const express = require('express')
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
require('dotenv').config()
// const bcrypt = require('bcrypt')

const User = require('./models/user.Model.js')

const port = process.env.PORT || 5000;

app.use(express.json())   // Gives access to the req.body


app.use(cors())


// app.get("/test", (req, res) => {
//     console.log("test route HIT!!!")
//     res.json({ msg: "Hello World!" })
// })

app.post("/create", (req, res) => {
    console.log("create route HIT!!!", req.body)
    User.create(req.body)
    .then(created => {
        console.log("created", created)
        // res.json(created)
    })
})

app.get("/GetUsers", (req, res) => {
    console.log("Users Found")
    User.find()
    .then(found => {
        console.log("found", found)
        res.json(found)
    })
})

// app.delete("/DeleteUsers", (req, res) => {
//     console.log("Users Deleted")
//     User.find()
//     .then(found => {
        
//     })
// })

app.listen(port, () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("connected to Database")
    })
    console.log(`Server is running on port: ${port} `)
})