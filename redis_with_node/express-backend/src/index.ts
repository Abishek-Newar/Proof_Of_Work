import express from "express"

import { createClient } from "redis"

const client = createClient();
const app = express()
app.use(express.json());


app.post("/submit",async(req,res)=>{
    const body = req.body;

    //push to database

    try {
        await client.lPush("submissions",JSON.stringify(body))
       res.json({msg: "submiision sucessesful"})
    } catch (error) {
        console.error("error while submission",error)
        res.status(500).send("error while submission")
    }

})

async function startServer(){
    try {
        await client.connect();
        console.log("redis connected")

        app.listen(3000,()=>{
            console.log("port connected")
        })
    } catch (error) {
        console.error("Failed to connect to redis",error)
    }
}

startServer();