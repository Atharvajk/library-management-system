const express = require('express');

const app = express();

app.use(bodyParser.json());

// Server setup
app.listen((3000), () => {
    console.log("Server is Running");
})
module.exports = app;
