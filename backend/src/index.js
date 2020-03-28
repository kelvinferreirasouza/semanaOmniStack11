const express = require("express");
const routes = require("./routes");
const app = express();

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 * 
 */

/**
 * Tipos de parâmetros:
 * 
 * Query: Parâmetros nomeados enviados na rota após "?" utilizado para Filtros, Paginação..
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc..
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users).select('*').where()
 */

app.use(express.json());
app.use(routes);
app.listen(3333);