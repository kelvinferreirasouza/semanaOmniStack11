const express = require("express");
const routes = express.Router();

routes.get('/users', (request, response) => {

    return response.json({
        evento: 'Semana OminiStack 11',
        aluno: 'Kelvin Ferreira Souza'
    });
});

module.exports = routes;