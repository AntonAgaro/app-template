import express from "express";
import 'dotenv/config'
import Server from './src'

const app = express()
const server = new Server(app)

app.get('/', (req, res) => {
    res.send('test!!Kmkf   mweewrme!!')
})

app.get('/api', (req, res) => {
    res.send('api')
})

const PORT = process.env.SERVER_PORT
app.listen(PORT, () => {
    console.log('Server is Running!')
})