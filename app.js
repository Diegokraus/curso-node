const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello test')
})

app.get('/user', (req, res) => {
    res.send({
        name: 'John Doe',
    })
})

app.delete('/user', (req, res) => {
    res.send({
        name: 'John DELETADO',
    })
})

app.listen(8080, () => {
    console.log('Server is running...')
})