const crypto = require("crypto");
const connection = require("../database/connection");

module.exports = {

    async index(request, response) {
        const hospitals = await connection("hospitals").select("*");

        return response.json(hospitals);
    },

    async create(request, response) {
        /** Garante a integridade dos dados enviados */
        const { name, email, contact, city, uf } = request.body;

        /** Gera um código hexadecimal de 4 caracteres para usar como ID não sequencial */
        const id = crypto.randomBytes(4).toString("HEX");

        await connection("hospitals").insert({
            id,
            name,
            email,
            contact,
            city,
            uf
        });

        return response.json({ id });
    }
};