import express from 'express';
import http from 'http';
import cors from 'cors';
import dotenv from 'dotenv';
import authRouter from './src/routes/authRoutes.js';
import mongoose from 'mongoose'
import { error } from 'console';
dotenv.config();

const PORT = process.env.PORT || process.env.API_PORT;

const app =express();

app.use(express.json());

app.use(cors());

app.use("/api/auth",authRouter)
app.get("/", (req, res)=>{
    return res.send("Hello here is your server")
})

const server = http.createServer(app)

mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        server.listen(PORT, ()=>{
            console.log(`Server started on ${PORT}`);
        })
    }).catch(err =>{
        console.log("Database Connection failed, Server not started");
        console.log(err);
    })




