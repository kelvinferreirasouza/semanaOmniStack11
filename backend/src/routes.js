const express = require("express");

const HospitalController = require("./controllers/HospitalController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

/** Rotas de Usuário */
routes.post("/sessions", SessionController.create);

/** Rotas de Hospital*/
routes.get("/hospitals", HospitalController.index);
routes.post("/hospitals", HospitalController.create);

/** Rotas de Incident*/
routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

/** Rotas de Profile */
routes.get("/profile", ProfileController.index);

module.exports = routes;