//Importações
const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");

//exportação do objeto "app" modificado pelo consign e body-parser
module.exports = () => {
    const app = express()
    app.use(bodyParser.urlencoded({extended: true})) //Permitir que o servidor possa ler respostas de formulário
    app.use(bodyParser.json()) //Permitir que o servidor possa ler respostas de formulário
    consign().include("controllers").into(app) //Unindo as totas dos controllers ao app. 
    return app
}