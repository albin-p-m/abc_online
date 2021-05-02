const mysql = require('mysql');
const jwt = require('jsonwebtoken');

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

exports.register = (req, res) => {

    console.log(req.body);

    const { name, email, password, confirm, usr_typ, phnno } = req.body;

    if (name == '' || email == '' || password == '' || confirm == '' || usr_typ == '' || phnno == '') { //authenticate wheather the feilds are empty or not
        console.log('fill all the required form fields........');
        return res.render('register', {
            message: 'Please fill all the fields....'
        });
    } else {
        return res.render('register', {
            message: 'registeration successful...'
        });
    }

};

exports.login = (req, res) => {
    const { email, password } = req.body;

    if (email == '' || password == '') { //authenticate wheather the feilds are empty or not
        console.log('fill all the required form fields........');
        return res.render('register', {
            message: 'Please fill all the fields....'
        });
    }
};