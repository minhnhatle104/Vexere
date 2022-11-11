const express = require('express')
const {checkExist} = require("../middlewares/checkExist")
const {Station} = require("../models")
const {createStation, getAllStation, getDetailStation, updateStation, deleteStation} = require("../controllers/station.controllers")

const stationRouter = express.Router()

stationRouter.post("/",createStation)
stationRouter.get("/",getAllStation)
stationRouter.get("/:id",getDetailStation)
stationRouter.put("/:id",checkExist(Station),updateStation)
stationRouter.delete("/:id",checkExist(Station),deleteStation)

module.exports = {
    stationRouter,
}