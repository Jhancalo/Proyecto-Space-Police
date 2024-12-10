const express=require("express")
const cors=require("cors")
const app=express()
require("dotenv").config
app.use(cors())
app.use(express.json())
const port=process.env.post||4100
app.use("/",require("./src/aprendiz.js"))
app.use("/api/citizen",require("./src/citizen.js"))
app.listen(port,()=>{
    console.log(`Servidor corriendo en el puerto ${port}`)
})

