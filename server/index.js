import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./src/routes/authRoutes.js";
import mongoose from "mongoose"
import channelsRouter from "./src/routes/channelsRouter.js";
import settingsRouter from "./src/routes/settingsRouter.js";
import { registerSocketServer } from "./src/io/io.js";

// these imports intialize collection creation in mongodb
import Message from "./src/models/Message.js";
import User from "./src/models/User.js";
import Channel from "./src/models/Channel.js";

dotenv.config();

const PORT = process.env.PORT || process.env.API_PORT;

const app =express();

app.use(express.json());

app.use(cors());

//routes
app.use("/api/auth",authRouter);
app.use("/api/channels", channelsRouter);
app.use("/api/settings", settingsRouter);

app.get("/", (req, res)=>{
    return res.send("Hello here is your server")
})

const server = http.createServer(app)

registerSocketServer(server);

mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        server.listen(PORT, ()=>{
            console.log(`Server started on ${PORT}`);
        })
    }).catch(err =>{
        console.log("Database Connection failed, Server not started");
        console.log(err);
    })