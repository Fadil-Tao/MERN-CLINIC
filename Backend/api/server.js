const express = require('express');
const cors = require('cors');
// environment variable 
require('dotenv').config()
// import db 
require('..db/Config/db')

const apiRoutes = require('../Routes/api.routes');
const app = express();

// Middlewares
app.use(
    cors({
      origin: "*",
    })
  );
app.use(express.json())

// api route
app.use('/api',apiRoutes)

const port = process.env.PORT || 3000;

app.listen(port,() => {
    console.log(`Server is Running on ${port}`)
})
