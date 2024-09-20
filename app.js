import express from "express";
import  dbConnection  from "./database/dbconnection.js";
import {config} from "dotenv";
import cors from "cors";
import cookieParser from 'cookie-parser';
import fileUpload from "express-fileupload";
import categoryRouter from "./router/categoryRouter.js";
import animalRouter from "./router/animalRouter.js"
import {errorMiddleware} from "./middlewares/errorMiddleware.js";


const app = express();
// Load environment variables
config({ path: "./config/config.env" });
app.use(cors({
    origin:process.env.FRONT_END,
    methods:['GET','POST','PUT','DELETE'],
    credentials:true,
    allowedHeaders: ['Content-Type'],
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp/",
}));

app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/animals", animalRouter);

dbConnection();

app.use(errorMiddleware);

export default app;