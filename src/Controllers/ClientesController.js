import CLienteModel from "../Models/CLienteModel.js";

class ClientesController{ constructor(){

}
 
create(req,res){
    const nome_cliente= req.body.nome_cliente
    ClienteModel.create(nome_cliente).then(
        resposta =>{
            console.debug("Cadastrando uma cliente")
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
    ClienteModel.read().then(
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
    const id_cliente = req.params.id_cliente
    const nome_cliente = req.body.nome_cliente
    ClienteModel.update(id_cliente,nome_cliente).then(
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
    ClienteModel.delete(id_cliente).then(
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

 export default new ClientesController()