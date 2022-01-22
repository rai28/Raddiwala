const express=require("express")

const app= express()

app.get("/",(req,res)=>{
 res.send("data send")
})


app.listen(5000 || process.env.port,()=>{
console.log("server running on 5000")
})