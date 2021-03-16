const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');

// Serving the static files
app.use(express.static(path.join(__dirname, '..', 'client', 'build')))

app.get('*', (res, req) => {
    // Sending index.html to client.
    res.sendFile(pathjoin(__dirname, '..', 'client', 'build', 'index.html'))
})

//Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})