import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDb } from './connection/connect.js';
import router from './router/router.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const url = process.env.MONGO_URL;

connectDb(url, app);
app.use("/api", router);