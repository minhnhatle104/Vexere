const express = require('express')
const {checkExist} = require("../middlewares/validation/checkExist")
const {Station} = require("../models")
const {createStation, getAllStation, getDetailStation, updateStation, deleteStation} = require("../controllers/station.controllers")
const { authenticate } = require('../middlewares/auth/authenticate')

const stationRouter = express.Router()

stationRouter.post("/",authenticate,createStation)
stationRouter.get("/",getAllStation)
stationRouter.get("/:id",getDetailStation)
stationRouter.put("/:id",checkExist(Station),updateStation)
stationRouter.delete("/:id",authenticate,checkExist(Station),deleteStation)

module.exports = {
    stationRouter,
}