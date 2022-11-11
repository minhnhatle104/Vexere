const brcypt = require("bcryptjs")
const {User} = require("../models")

const register = async (req,res) => {
    const {name,email,password,numberPhone} = req.body
    try{
        // Tạo ra mỗi chuỗi ngẫu nhiên
        const salt = brcypt.genSaltSync(10)
        // mã hóa salt + password
        const hashPassword = brcypt.hashSync(password,salt)
        const newUser = await User.create({name,email,password:hashPassword,numberPhone})
        res.status(201).send(newUser)
    }catch(error){
        res.status(500).send(error)
    }
}

module.exports = {
    register,
}