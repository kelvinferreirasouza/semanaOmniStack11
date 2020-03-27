const express = require('express');

const app = express();

app.get('/users', (request, response) => {
    return response.json({
        evento: 'Semana de Curso',
        aluno: 'Kelvin Ferreira Souza'
    });
});

app.listen(3333);