import cors from 'cors';
import express from 'express';
import { connectToDB, db } from "./db.js";

const app = express()
app.use(cors())
app.use(express.json())

app.post('/', (req, res) => {
    res.json("server is running successfully!");
})

app.post('/ast', async(req, res) => {
    await db.collection("ast").find().toArray()
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})

app.post('/insert', async(req, res) => {
    
    await db.collection("ast").insertOne({Name:req.body.name,Team:req.body.team})
    .then((result)=>{
        res.json(result)
    }).catch((e)=>console.log(e))
 
})

app.post('/insertmany', async(req, res) => {
    await db.collection("ast").insertMany(req.body)
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})

app.post('/findone', async(req, res) => {
    await db.collection("ast").findOne({Name:"teja"})
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})

app.post('/findmany', async(req, res) => {
    await db.collection("ast").find().toArray()
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})

app.post('/updateone', async(req, res) => {
    await db.collection("ast").updateOne({Name:"teja"},{$set:{Age:20}})
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})

app.post('/updateone', async(req, res) => {
    await db.collection("ast").findOneAndUpdate({Name:"teja"},{$set:{Age:20}})
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})

app.post('/updatemany', async(req, res) => {
    await db.collection("ast").updateMany({Age:20},{$set:{Age:25}})
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})

app.post('/deleteone', async(req, res) => {
    await db.collection("ast").deleteOne({Name:"teja"})
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})

app.post('/detemany', async(req, res) => {
    await db.collection("ast").deleteMany()
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})

app.post('/signin', async(req, res) => {
    console.log(req.body)
    await db.collection("ast").findOne({Gmail:req.body.name})
    .then((result)=>{
        console.log(result)
        if(result?.Password===req.body.password){
            res.json({message:"login sucess", values:result})
        } else {
            res.json({error:"user not found"})
        }
    })
    .catch((e)=>console.log(e))
})


app.post('/signup', async(req, res) => {
    console.log(req.body)
    await db.collection("ast").insertOne({Gmail:req.body.gmail,Password:req.body.password,Phone:req.body.phone,Registerno:req.body.register})
    .then((result)=>{
        console.log(result)
        if(result){
            res.json({message:"Signup sucess", values:result})
        } else {
            res.json({error:"Failed"})
        }
    })
    .catch((e)=>console.log(e))
})

app.post('/students', async(req, res) => {
    await db.collection("ast").find().toArray()
    .then((result)=>{
        res.send(result)
    })
    .catch((e)=>console.log(e))
})

connectToDB(() => {
    app.listen(9000, () => {
        console.log("server running at 9000");
    })
})