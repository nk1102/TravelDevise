import  Express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes  from './routes/posts.js';
import dotenv from 'dotenv';
import userRouter from "./routes/user.js";

dotenv.config();




const app  = Express();
app.use(bodyParser.json({limit : "30mb",extended : true}));

app.use(bodyParser.urlencoded({limit : "30mb",extended : true}));
app.use(cors());
app.use('/posts',postRoutes);
app.use('/user',userRouter);

app.get('/',(req,res) =>{
        res.send("APP IS RUNNING");
});
const CONNECTION_URL = "mongodb+srv://TravelDevise:TravelDevise123@cluster0.rd3al.mongodb.net/?retryWrites=true&w=majority";
const PORT= process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
        .then( () => app.listen(PORT,() => console.log(`Server running on port : ${PORT}`)))
        .catch( (error) => console.log(`${error} did not connect`));
 