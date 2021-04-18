import mysql from "mysql";

export const con = mysql.createConnection({
    host: 'klbcedmmqp7w17ik.cbetxkdyhwsb.us-east-1.rds.amazonaws.com', // O host do banco. Ex: localhost
    user: 'w5w84ruuryvbz1kk', // Um usuário do banco. Ex: user 
    password: 'yfarifbkdyl833dq', // A senha do usuário. Ex: user123
    database: 'lcqqpl5pd6dme6c8' // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
});