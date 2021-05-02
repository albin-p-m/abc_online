const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const mysql = require("mysql");

dotenv.config({ path: './.env' });

const port = process.env.PORT;

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

// dotenv.config({ path: './.env' });

const page = require('./routes/pages');
const auth = require('./routes/auth');

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));
app.set('view engine', 'hbs'); //setting a web template view engine

app.use(express.urlencoded({ extended: false })); //parse url encoded bodied as sent by html forms
app.use(express.json()); //parse json bodies as sent by api clients

db.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("MYSQL Connected....");
    }
});

app.use('/', page);
app.use('/auth', auth);
app.use(express.json());



app.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("server started at port : " + port);
    }
});