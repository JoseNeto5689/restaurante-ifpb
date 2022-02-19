const mysql = require("mysql2") //Importação do BD
const conecction = mysql.createConnection({ //Parametros do banco de dados
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345",
    database: "storage",
})

module.exports = conecction