const express = require('express');
//const chalk = require('chalk');
const debug = require('debug')('app');
const mongoose = require('mongoose');

const app = express();
const port = process.env.port || 3000;

app.use(express.json());

const customerRouter = require('./src/routers/CustomerRouter');
app.use('/customer', customerRouter);
const userRouter = require('./src/routers/userRouter');
app.use('/user', userRouter);

const uri = 'mongodb+srv://NeeharikaReddy:Neeha555@cluster0.hpnh6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connection String:  " +uri);
    console.log("MongoDB database connection established successfully");
});

const nodeServerPort = `listening on port ${port}`

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});