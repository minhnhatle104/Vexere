const checkExist = (Model) => {
    return async (req,res,next) =>{
        const {id} = req.params
        const object = await Model.findOne({where:{id}})
        if(object){
            next()
        }else{
            res.status(404).send(`Không tìm thấy đối tượng với id là ${id}`)
        }
    }
}

module.exports = {
    checkExist,
}