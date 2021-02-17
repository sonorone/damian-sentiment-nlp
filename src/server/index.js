const https = require('follow-redirects').https;
const path = require('path');
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const mockAPIResponse = require('./mockAPI.js');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT;
const LANG = process.env.LANGUAGE;
const MODEL = process.env.MODEL;
const API_KEY = process.env.API_KEY;
const app = express();
app.use(cors());

app.use(express.static('dist'));
app.use(bodyParser.json());

// designates what port the app will listen to for incoming requests
app.listen(PORT, function () {
    console.log(`Listening on http://localhost:${PORT}`);
})

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/mock', function (req, res) {
    res.send(mockAPIResponse);
})

app.post('/test', function (request, response) {

    const uri = encodeURI(`/sentiment-2.1?key=${API_KEY}&lang=${LANG}&txt=${request.body.text}&model=${MODEL}`);

    const options = {
        'method': 'POST',
        'hostname': 'api.meaningcloud.com',
        'path': uri,
        'headers': {
        },
        'maxRedirects': 20
    };

    const req = https.request(options, function (res) {
        let chunks = [];
        
        res.on("data", function (chunk) {
            chunks.push(chunk);
        });
        
        res.on("end", function () {
            let body = Buffer.concat(chunks);
            console.log(JSON.parse(body.toString()));
            response.send(JSON.parse(body.toString()));
        });
        
        res.on("error", function (error) {
            console.error(error);
            response.sendStatus(500);
        });
    });
    
    req.end();
})
