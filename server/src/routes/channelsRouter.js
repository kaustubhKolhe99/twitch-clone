import express from "express";
import ExpressValidator from "express-joi-validation";
import Joi from "joi";
import {getChannelDetails, getChannels, postFollowChannel, getFollowedChannels } from "../controllers/controllers.js"
import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();

const channelDetailSchema = Joi.object({
    channelId: Joi.string().required(),
});

const validator  = ExpressValidator.createValidator({});

router.get("/followed" , verifyToken, getFollowedChannels);

router.post("/follow", verifyToken, postFollowChannel );

router.get(
    "/:channelId", 
    validator.params(channelDetailSchema), 
    getChannelDetails  
);

router.get(
    "/",
    getChannels
);

export default router;