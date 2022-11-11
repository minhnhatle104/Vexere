const {Station} = require("../models")

const createStation = async (req,res) => {
    const {name,address,province} = req.body
    try{
        const newStation = await Station.create({name,address,province})
        res.status(201).send(newStation)
    }catch(err){
        res.status(500).send(err)
    }
}

module.exports = {
    createStation,
}