import SistemaModela from "../Models/SistemaModel.js";

class SistemaController{
    constructor(){

    }

    create(req,res){
        const nome_cliente = req.body.nome_categoria
        SsistemaModel.create(nome_cliente).then(
            resposta =>{
                console.debug("Cadastrando um cliente")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro cadastrando um cliente")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
    read(req,res){
        SistemaModel.read().then(
            resposta =>{
                console.debug("Exibindo clientes")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro Exibindo clientes")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
    update(req,res){
        const id_clientes = req.params.id_pedido
        const nome_categoria = req.body.nome_cliente
       SistemaModel.update(id_pedido,nome_cliente).then(
            resposta =>{
                console.debug("Atualizando cliente")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro Atualizando cliente")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    delete(req,res){
        const id_cliente = req.params.id_cliente
        SistemaModel.delete(id_cliente).then(
            resposta =>{
                console.debug("Deletando cliente")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro Deletando cliente")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
}

export default new SistemaController()