import express from "express"
import ClientesController from "./src/Controllers/ClientesController.js"
import PedidosController from "./src/Controllers/PedidosContoller.js"

const server = express()

server.use(express.json())

server.get("/",(req,res)=>{
    res.status(200).json("Servidor Funcionando")
})

server.post("/clientes",ClientesController.create)
server.get("/clientes",ClientesController.read)
server.put("/clientes/:id_clientes",ClientesController.update)
server.delete("/clientes/:id_clientes",ClientesController.delete)

server.post("/Pedidos",PedidosController.create)
server.get("/Pedidos",PedidosController.read)
server.put("/Pedidos/:id_pedidos",PedidosController.update)
server.delete("/Pedidos/:id_pedidos",PedidosController.delete)

server.listen(5000)















