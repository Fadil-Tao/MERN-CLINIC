const mongoose = require('mongoose');
const mongoDB_URL = process.env.MONGODB_URL;

mongoose.connect(mongoDB_URL)

mongoose.connection.on('connected', res=> {
    console.log("connected")
})
mongoose.connection.on("error", (err) => {
    console.log(err);
});
  