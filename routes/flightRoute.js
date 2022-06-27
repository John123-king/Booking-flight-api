const express = require('express');

// const router = express.Router();
const controller = require('../controllers/flightController');

// router.get('/', controller.example)

const router = require('express').Router();

router
.get("/", controller.getFlights)
.get("/:id", controller.getFlight)
.post("/", controller.createFlight)
.put("/:id", controller.updateFlight)
.delete("/:id", controller.deleteFlight);

module.exports = router;