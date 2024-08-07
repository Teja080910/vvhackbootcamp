import cors from 'cors';
import express from 'express';
import { connectToDB } from "./db.js";

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json("server is running successfully!");
})

app.post('/ast', (req, res) => {
    console.log({Name:req.body.name,AST:req.body.team})
    res.json({Name:req.body.name,AST:req.body.team});
})


connectToDB(() => {
    app.listen(9000, () => {
        console.log("server running at 9000");
    })
})