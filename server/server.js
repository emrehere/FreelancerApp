import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'; 
import cors from 'cors';
import loginRoutes from './routes/loginRoutes.js';
import hireRoutes from './routes/hireRoutes.js';



dotenv.config();  

const app = express();
const port = process.env.PORT || 8008;

app.use(express.json({ limit: '150mb', extended: true }));
app.use(express.urlencoded({ limit: '150mb', extended: true }));

app.use(cors());

app.use('/api', loginRoutes);
app.use('/api', hireRoutes);




mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});




app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);

  
});