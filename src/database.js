require('dotenv').config({path: 'variaveis.env'})

const mysql = require('mysql2')
const { questionNewPassword } = require('readline-sync')

const connection = mysql.createConnection({
    host: process.env.bd_host,
    user: process.env.bd_user,
    password: process.env.bd_password,
    database: process.env.bd_name
})

connection.connect(err =>{
    if (err) throw err
    console.log(`connection to database ${process.env.bd_name}`)
});
