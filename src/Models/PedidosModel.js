import mysql from "mysql2"
import config from "../../Config.js"

class PedidosModel {
    constructor() {
        this.conexao = mysql.createConnection(config.db)
        console.debug("Conectado")
    }

    create(nome_cliente, id_pedidos) {
        let sql = `INSERT INTO pedidos (nome_cliente,id_pedidos) VALUES("${nome_cliente}","${id_cliente}");`

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, (erro, retorno) => {
                if (erro) {
                    console.debug(erro)
                    reject([400, erro])
                }
                resolve([201, "Pedidos inserido"])
            })
        });
    }

    read() {
        let sql = `SELECT * FROM pedidos;`
        return new Promise((resolve, reject) => {
            this.conexao.query(sql, (erro, retorno) => {
                if (erro) {
                    console.debug(erro)
                    reject([400, erro])
                }
                resolve([200, retorno])
            })
        });
    }
    update(id_pedido, nome_cliente, id_cliente) {
        let sql = `UPDATE pedidos SET nome_cliente="${nome_doce}", id_cliente="${id_cliente}" WHERE id_pedido="${id_pedido}";`
        return new Promise((resolve, reject) => {
            this.conexao.query(sql, (erro, retorno) => {
                if (erro) {
                    console.debug(erro)
                    reject([400, erro])
                }
                resolve([200, "Doce Atualizado"])
            })
        });
    }
    delete(id_pedido) {
        let sql = `DELETE FROM pedido WHERE id_pedidos="${id_pedido}"`
        return new Promise((resolve, reject) => {
            this.conexao.query(sql, (erro, retorno) => {
                if (erro) {
                    console.debug(erro)
                    reject([400, erro])
                }
                resolve([200, "Pedidos Deletado"])
            })
        });
    }
}

export default new PedidosModel();