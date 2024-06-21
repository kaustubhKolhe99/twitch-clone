import express from "express";
import ExpressValidator from 'express-joi-validation';
import Joi from "joi";
import {getChannelDetails} from "../controllers/controllers.js"
const router = express.Router();

const channelDetailSchema = Joi.object({
    channelId: Joi.string().required(),
});

const validator  = ExpressValidator.createValidator({});

router.get(
    '/:channelId', 
    validator.params(channelDetailSchema), 
    getChannelDetails  
);

export default router;