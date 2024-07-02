CREATE DATABASE sistema_doces;

use sistema_doces ;

CREATE TABLE cliente(
 id_cliente INT PRIMARY KEY AUTO_INCREMENT,
 nome_cliente VARCHAR (30),
 endereco VARCHAR (45)
 );

INSERT INTO cliente (nome_cliente) VALUES
 ("Ana Souza"), 
 ("Luna Oliveira"), 
 ("Agatha Julios"), 
 ("Romildo Silva");
 
 
 
 INSERT INTO endereco (endereco) VALUES
 ("Rua leitao Silva"), 
 ("Rua Pedro luca"), 
 ("Rua Almeida"), 
 ("Rua marinho Crsito");
 
 

SELECT * FROM  cliente;



CREATE TABLE cliente ( 
id_pedidos INT PRIMARY KEY AUTO_INCREMENT, 
nome_clientes VARCHAR (40) 
NOT NULL, id_cliente INT NOT NULL, 
FOREIGN KEY (id_cliente)
 REFERENCES pedidos(id_pedido) );

INSERT INTO doces (id_pedido,nome_cliente) VALUES 
(1,"bolo de ninho"), 
(2,"Bolo laranja"), 
(3,"Torta de frango");



SELECT * FROM pedidos;



