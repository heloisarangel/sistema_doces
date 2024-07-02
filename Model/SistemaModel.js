import mysql from "mysql2"
import config from "../Config.js"

class SistemaModel{
    constructor(){
        this.conexao = mysql.createConnection(config.db)
        console.debug("Conectado")
    }

    create(nome_categoria){
        let sql = `INSERT INTO cliente (nome_cliente) VALUES("${nome_cliente}");`

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([201,"Cliente inserido"])
            })
        });
    }

    read(){
        let sql = `SELECT * FROM cliente;`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,retorno])
            })
        });
    }
    update(id_cliente,nome_clientes){
        let sql = `UPDATE clientes SET nome_cliente="${nome_pedido}" WHERE id_cliente="${id_cliente}";`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,"Atualizado"])
            })
        });
    }
    delete(id_categoria){
        let sql = `DELETE FROM clientes WHERE id_cliente="${id_cliente}"`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,"Deletado"])
            })
        });
    }
}

export default new SistemaModel();