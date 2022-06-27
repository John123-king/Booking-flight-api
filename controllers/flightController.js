// exports.example = (req, res) => {
//     console.log("example")
//     res.send("Flight example")
// }

const {Flights} = require("../models/Flight");
const {v4: uuid} = require("uuid");

// Add/Book Flight
exports.createFlight = async (req, res) => {
    try {
        const { title, time, price, date } = await req.body;
        const newFlight = {
            id: uuid(),
            title,
            time,
            price,
            date,
        };

        Flights.push(newFlight);

        res.status(201).json({
            message: "Flight created",
            // flight: newFlight
            newFlight,
        });
    } catch (error) {
        res.status(500).json({ message:error.message });
    }
}

// Get all Flights
exports.getFlights = async (req, res) => {
    try {
        const flights = await Flights;
        res.status(200).json({
            message: "All flights",
            flights: flights
        });
    } catch (error) {
        res.status(500).json({ message:error }); 
    }
}

// Get a single flight
exports.getFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const flight = Flights.find((flight) => flight.id === id);
        res.status(200).json({
            message: "Flight found",
            flight,
        });
    } catch (error) {
       res.status(500).json({ message:error }); 
    }
}

// Update/Edit flight
exports.updateFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const flight = Flights.find((flight) => flight.id === id);
        const { title, time, price, date } = await req.body;
        flight.title = title;
        flight.time = time;
        flight.price = price;
        flight.date = date;
        res.status(200).json({
            message: "Flight updated",
            flight,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Delete flight
exports.deleteFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const flight = Flights.find((flight) => flight.id === id);
        Flights.splice(Flights.indexOf(flight), 1);
        res.status(200).json({
            message: "Flight deleted",
            flight,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}