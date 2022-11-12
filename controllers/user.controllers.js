const brcypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { User } = require("../models")

const register = async (req, res) => {
    const { name, email, password, numberPhone } = req.body
    try {
        // Tạo ra mỗi chuỗi ngẫu nhiên
        const salt = brcypt.genSaltSync(10)
        // mã hóa salt + password
        const hashPassword = brcypt.hashSync(password, salt)
        const newUser = await User.create({ name, email, password: hashPassword, numberPhone })
        res.status(201).send(newUser)
    } catch (error) {
        res.status(500).send(error)
    }
}

const login = async (req, res) => {
    const { email, password } = req.body
    // b1 : tìm ra user đang đăng nhập dựa trên email
    const user = await User.findOne({
        where: {
            email
        }
    })
    if (user) {
        // b2: Kiếm mật khẩu có đúng hay không
        const isAuth = brcypt.compareSync(password, user.password)
        if (isAuth) {
            const token = jwt.sign({ email: user.email, type: user.type }, "secretkey", { expiresIn: 60 * 60 })
            res.status(200).send({ message: "Đăng nhập thành công", token })
        } else {
            res.status(500).send("Đăng nhập thất bại")
        }
    } else {
        res.status(404).send("Không tìm thấy user")
    }
}

module.exports = {
    register,
    login,
}