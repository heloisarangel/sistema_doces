import PedidosModel from "../Models/PedidosModel.js"

class PedidosController{ constructor(){

}

create(req,res){
    const nome_cliente = req.body.nome_doce
    const id_cliente= req.body.id_cliente
    PedidosModel.create(nome_cliente,id_cliente).then(
        resposta =>{
            console.debug("Cadastrando Pedidos")
            res.status(resposta[0]).json(resposta[1])
        }
    ).catch(
        resposta =>{
            console.debug(resposta)
            console.debug("Erro ao cadastrar um Pedidos")
            res.status(resposta[0]).json(resposta[1])
        }
    )
}
read(req,res){
    PedidosModel.read().then(
        resposta =>{
            console.debug("Exibindo Pedidos")
            res.status(resposta[0]).json(resposta[1])
        }
    ).catch(
        resposta =>{
            console.debug(resposta)
            console.debug("Erro Exibindo Pedidos")
            res.status(resposta[0]).json(resposta[1])
        }
    )
}
update(req,res){
    const id_pedido = req.params.id_pedido
    const nome_cliente = req.body.nome_cliente
    const id_cliente = req.body.id_cliente
    PedidosModel.update(id_pedido,nome_cliente,id_cliente).then(
        resposta =>{
            console.debug("Atualizando Pedidos")
            res.status(resposta[0]).json(resposta[1])
        }
    ).catch(
        resposta =>{
            console.debug(resposta)
            console.debug("Erro Atualizando Pedidos")
            res.status(resposta[0]).json(resposta[1])
        }
    )
}

delete(req,res){
    const id_pedido = req.params.id_pedido
    PedidosModel.delete(id_pedido).then(
        resposta =>{
            console.debug("Deletando Pedidos ")
            res.status(resposta[0]).json(resposta[1])
        }
    ).catch(
        resposta =>{
            console.debug(resposta)
            console.debug("Erro Deletando Pedidos")
            res.status(resposta[0]).json(resposta[1])
        }
    )
}
}

export default new PedidosController()