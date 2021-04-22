const express = require('express')
const app = express()
const test = require('./test.json')

app.use(express.json())

app.listen(8000, () => {
    console.log(`Serveur à l'écoute`)
})

app.get('/test', (req, res) => {
    res.status(200).json(test)
})

app.post('/test', (req, res) => {
    test.push(req.body)
    res.status(200).json(test)
})