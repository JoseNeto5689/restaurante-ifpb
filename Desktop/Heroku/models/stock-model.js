const connection = require("../infrastructure/connection") //Estabelecendo conexão com o BD
class Stock{
    list(res){
        //Query responsável por listar todos os produtos
        const sql = "SELECT product.id, product.product_name, product.product_description,product.amount, food_kinds.food_kind, food_kinds.food_kind_id, product.expiration_date FROM product join food_kinds ON product.food_kind = food_kinds.food_kind_id ORDER BY product.id DESC;"
        connection.query(sql, (erro ,result) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(result)
            }
        })
    }

    alter(res, values, id){
        //Query que atualiza um determinado produto do BD
        const sql = "update product set ? where id = ?"
        connection.query(sql, [values, id],(erro ,result) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(result)
            }
        })
    }

    delete(res, id){
        //Query que deleta 1 ou mais produtos do BD 
        const sql = `delete from product where id IN ${id}`
        connection.query(sql, id, (erro, result) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(id)
            }
        })
    }

    add(res, values){ 
        //Query para adicionar produtos ao BD
        const sql = "insert into product set ?"
        connection.query(sql, values, (erro, result) => {
            if(erro){
                res.status(400).json(erro)
            } else{
                res.status(201).json(result)
            }
        })
    }

    search(res, value){
        //Query para pesquisar produtos no BD
        const sql = `SELECT product.id, product.product_name, product.product_description,product.amount, food_kinds.food_kind, food_kinds.food_kind_id, product.expiration_date FROM product join food_kinds ON product.food_kind = food_kinds.food_kind_id WHERE product_name like "%${value}%" OR product_description like "%${value}%"`
        connection.query(sql, value, (erro, result) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(result)
            }
        })
    }
}

module.exports = new Stock()