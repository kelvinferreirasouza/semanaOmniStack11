const express = require("express");
const HospitalController = require("./controllers/HospitalController");

const routes = express.Router();

/** Rota de listagem de Hospital */
routes.get("/hospitals", HospitalController.index);

/** Rota para criar um Hospital */
routes.post("/hospitals", HospitalController.create);

module.exports = routes;