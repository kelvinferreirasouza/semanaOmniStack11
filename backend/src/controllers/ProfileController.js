const connection = require("../database/connection");

module.exports = {
    async index(request, response) {
        const hospital_id = request.headers.authorization;
        const incidents = await connection("incidents")
            .where("hospital_id", hospital_id)
            .select("*");

        return response.json(incidents);
    }
}