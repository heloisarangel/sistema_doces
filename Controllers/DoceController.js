import DoceModel from "../Models/DoceModel.js"

class DoceController{
    constructor(){

    }

    create(req,res){
        const nome_cliente = req.body.nome_cliente
        const id_cliente = req.body.id_cliente
        DoceModel.create(nome_cliente,id_pedido).then(
            resposta =>{
                console.debug("Cadastrando um doce")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro cadastrando um doce")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
    read(req,res){
        DoceModel.read().then(
            resposta =>{
                console.debug("Exibindo doces")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro Exibindo doces")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
    update(req,res){
        const id_pedido = req.params.id_pedido
        const nome_cliente= req.body.nome_cliente
        const id_cliente = req.body.id_cliente
        DoceModel.update(id_cliente,nome_cliente,id_pedido).then(
            resposta =>{
                console.debug("Atualizando doce")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro Atualizando doce")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    delete(req,res){
        const id_cliente = req.params.id_cliente
        DoceModel.delete(id_doce).then(
            resposta =>{
                console.debug("Deletando doce")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro Deletando doce")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
}

export default new DoceController()