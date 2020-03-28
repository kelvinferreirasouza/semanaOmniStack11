const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const incidents = await connection("incidents").select("*");

        return response.json(incidents);
    },

    async create(request, response) {
        const { title, description, value } = request.body;

        /** retorna o id do usuario autenticado */
        const hospital_id = request.headers.authorization;

        /** Retorna o id do cadastro realizado e armazena a chave do array
         *  e armaneza nessa variável id  */
        const [id] = await connection("incidents").insert({
            title,
            description,
            value,
            hospital_id,
        });

        return response.json({ id });
    }
};