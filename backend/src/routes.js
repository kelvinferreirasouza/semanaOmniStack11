const express = require("express");

const HospitalController = require("./controllers/HospitalController");
const IncidentController = require("./controllers/IncidentController");

const routes = express.Router();

/** Rotas de Hospital*/
routes.get("/hospitals", HospitalController.index);
routes.post("/hospitals", HospitalController.create);

/** Rotas de Incident*/
routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

module.exports = routes;