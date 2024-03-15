import mongoose from "mongoose";
import MyHireInfo from "../models/hireModel.js";

async function createHire(req, res) {
       
        const userId = req.user._id;
     
       
        try {
       
              
                console.log("req.body",req.body)
          const { hireInfo } = req.body;
 
          
          const myHireInfoInstance = new MyHireInfo({  hireInfo, userId });
          console.log("myHireInfoInstance", myHireInfoInstance)
          await myHireInfoInstance.save();
          
      
          res.status(201).json({ message: "hireinfo Data saved successfully" });
        } catch (error) {
          console.error("Error saving data:", error);
          res.status(500).json({ error: "Internal Server Error" });
        }
      
}

export  { createHire };
