import express from "express"
import SistemaController from "./Controllers/SistemaController.js"
import DoceController from "./Controllers/DoceController.js"

const server = express()

server.use(express.json())

server.get("/",(req,res)=>{
    res.status(200).json("Servidor Funcionando")
})

server.post("/clientes",SistemaController.create)
server.get("/clientes",SistemaController.read)
server.put("/clientes/:id_clientes",SistemaController.update)
server.delete("/clientes/:id_clientes",SistemaController.delete)

server.post("/doces",DoceController.create)
server.get("/doces",DoceController.read)
server.put("/doces/:id_doce",DoceController.update)
server.delete("/doces/:id_doce",DoceController.delete)

server.listen(5000)