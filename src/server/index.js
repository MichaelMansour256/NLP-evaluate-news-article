
const mockAPIResponse = require('./mockAPI.js')

const PORT = 8081

const dotenv = require('dotenv');
const express = require('express')
const cors = require('cors');
const { default: axios } = require('axios');

dotenv.config();

const app = express()

app.use(cors());

app.use(express.json());

app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.post('/sentiment',async function (req, res) {
    const url = req.body.url
    const response = await axios.get(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${url}&lang=en`)
    console.log(response.data)
    res.send(response.data)
})


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

//export {app}