import express from "express";
import ExpressValidator from 'express-joi-validation';
import Joi from "joi";
import { verifyToken } from "../middlewares/auth.js";
import { getChannelSettings } from "../controllers/controllers.js";

const router = express.Router();

const validator  = ExpressValidator.createValidator({});

router.get('/channel', verifyToken, getChannelSettings);

export default router;