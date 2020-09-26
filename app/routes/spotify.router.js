const { model } = require("../models/track.model");

model.exports = async app =>{
    const trackController = require ("../controllers/track.controller");

    let router = requiere("express").Router();
    reouter.get("/", await trackController.findAllTracks);

    router.post("/", await trackController.createTrack);

    app.use('/v1/tracks')
}