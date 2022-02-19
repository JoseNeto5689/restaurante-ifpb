const Stock = require("../models/stock-model") //Classe que contem os métodos a serem utilizados.
module.exports = app => {
    app.get("/stock", (req, res) => { //Requisição para listar todos os produtos
        Stock.list(res)
    })

    app.get("/stock/:value", (req, res) => { //Requisição para listar valores que possuam semelhança com o parametro value
        const value = (req.params.value)
        Stock.search(res, value)
    })

    app.post("/stock/add", (req, res) => { //Requisição que permite adicionar um produto ao banco de dados
        const values = req.body
        Stock.add(res, values)
    })
    app.patch("/stock/alter/:id",(req, res) => { //Requisição que permite alterar um produto a partir de seu id, enviando os novos dados pelo corpo da mesma
        const values = req.body
        const id = parseInt(req.params.id)
        Stock.alter(res, values, id)
    })

    app.delete("/stock/delete", (req, res) => { //Requisição para deletar items do banco de dados, a partir de 1 ou + id's.
        let ids = req.body.id
        ids = "(" + ids.join(",") + ")" //Adapatação dos id's para permitir eliminar mais de um produto por requisição.
        Stock.delete(res,ids)
    })
}