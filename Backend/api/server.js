const express = require('express');
const cors = require('cors');
// environment variable 
require('dotenv').config()
// import db 
require('../Config/db')

const apiRoutes = require('../Routes/api.routes');
const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(
    cors({
      origin: "*",
    })
  );
app.use(express.json())

// api route
app.use('/api',apiRoutes)


app.listen(port,() => {
    console.log(`Server is Running on ${port}`)
})

