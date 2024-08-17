const express = require('express')
const app = express()
var path = require('path');
const dotenv = require('dotenv')
var methodOverride = require('method-override');
const compression = require('compression')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors')
const http = require("http")
const server = http.createServer(app)
dotenv.config()

const userApi = require('./src');

const port = process.env.NODE_ENV == "dev" ? 80 : 8000
const mongoURL = process.env.mongodb_url || "mongodb://127.0.0.1:27017/solicy"
app.use(compression());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(express.static(path.resolve(__dirname, '../dist/client')));
app.use(cors('*'));

app.use('/api', userApi);
require('./wsServer').service(server)

if (process.env.NODE_ENV == 'dev') {
    mongoose.connect(mongoURL)
    .then(console.log('MongoDB connected'))
    .catch((e) => console.log("MongoDB connection failed. ", e))
}

server.listen(port, () => {
  console.log(`Solicy server listening on port ${port}`)
})