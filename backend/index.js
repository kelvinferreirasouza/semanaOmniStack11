const express = require('express');

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



app.get('/users', (request, response) => {


    return response.json({
        evento: 'Semana de Curso',
        aluno: 'Kelvin Ferreira Souza'
    });
});

app.listen(3333);