const express = require("express");

const HospitalController = require("./controllers/HospitalController");
const IncidentController = require("./controllers/IncidentController");

const routes = express.Router();

/** Rota de listagem de Hospital */
routes.get("/hospitals", HospitalController.index);

/** Rota para criar um Hospital */
routes.post("/hospitals", HospitalController.create);

/** Rota de listagem de incident */
routes.get("/incidents", IncidentController.index);

/** Rota de criação de incident */
routes.post("/incidents", IncidentController.create);

module.exports = routes;