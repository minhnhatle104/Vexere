const express = require("express")
const { sequelize } = require("./models")
const {rootRouter} = require("./routers")
const path = require("path")

const app = express()

// Cài ứng dụng sử dụng kiểu json
app.use(express.json())

// Cài static file
const publicPathDirectory = path.join(__dirname, "./public")
app.use(express.static(publicPathDirectory))

// dùng router
app.use("/api/v1",rootRouter)

// Lắng nghe sự kiện kết nối
app.listen(3000, async () => {
    console.log("App listening on http://localhost:3000")
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})
