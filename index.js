const express = require('express')
const {config} = require('dotenv').config()
const app = express()

app.use(express.json())

app.use( (req, res) => {
    res.status(404).json({
        message : 'The Page You Are Looking For Is Not Available'
    })
})

console.log(`App running on port ${process.env.PORT}`)

app.listen(process.env.PORT)