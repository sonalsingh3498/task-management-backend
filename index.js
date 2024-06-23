import express from "express";
import Task from './src/model/taskModel.js';
import { connectToDatabase } from "./src/config/connection.js" 
import cors from 'cors';
import taskRoutes from './src/route.js';


const app = express();
app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 3000;
connectToDatabase()
app.use(taskRoutes); 

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});