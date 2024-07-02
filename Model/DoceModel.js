import mysql from "mysql2"
import config from "../Config.js"

class DoceModel{
    constructor(){
        this.conexao = mysql.createConnection(config.db)
        console.debug("Conectado")
    }

    create(nome_doce, id_categoria){
        let sql = `INSERT INTO doces (nome_cliente,id_cliente) VALUES("${nome_cliente}","${id_cliente}");`

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([201,"Doce inserido"])
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
    update(id_doce,nome_doce,id_categoria){
        let sql = `UPDATE doces SET nome_cliente="${nome_cliente}", id_categoria="${id_cliente}" WHERE id_doce="${id_pedido}";`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,"Doce Atualizado"])
            })
        });
    }
    delete(id_doce){
        let sql = `DELETE FROM doces WHERE id_doce="${id_doce}"`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,"Doce Deletado"])
            })
        });
    }
}

export default new DoceModel();