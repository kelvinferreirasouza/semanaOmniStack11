const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { id } = request.body;

        const hospital = await connection("hospitals")
            .where("id", id)
            .select("name")
            .first();

        if (!hospital) {
            return response.status(400).json({ error: "No Hospital found with this ID" });
        }

        return response.json(hospital);
    }
}