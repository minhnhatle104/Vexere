const {Station} = require("../models")

const createStation = async (req,res) => {
    const {name,address,province} = req.body
    try{
        const newStation = await Station.create({name,address,province})
        res.status(201).send(newStation)
    }catch(error){
        res.status(500).send(error)
    }
}

const getAllStation = async (req,res) => {
    try{
        const listStation = await Station.findAll()
        res.status(200).send(listStation)
    }catch(error){
        res.status(500).send(error)
    }
}

const getDetailStation = async (req,res) => {
    const {id} = req.params
    try{
        const detailStation = await Station.findOne({where:{id}})
        res.status(200).send(detailStation)
    }catch(error){
        res.status(500).send(error)
    }
}

module.exports = {
    createStation,
    getAllStation,
    getDetailStation,
}