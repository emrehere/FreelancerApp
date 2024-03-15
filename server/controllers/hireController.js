import mongoose from "mongoose";
import MyHireInfo from "../models/hireModel.js";

async function createHire(req, res) {
       

        console.log("req.user", req.user)
        const userId = req.user._id;
        console.log("my userid in controller", userId);
       
        try {
       
                console.log("i m here")
          const { unvan,soru, title, description, chosenCityToDB, chosenCountryToDB,
        name, surname, phone } = req.body;
         
          const hireInfo = { unvan,soru, title, description, chosenCityToDB, chosenCountryToDB,
        name, surname, phone };
       
          
          const myHireInfoInstance = new MyHireInfo({  hireInfo, userId });
          console.log("myHireInfoInstance", myHireInfoInstance)
          await myHireInfoInstance.save();
          
      
          res.status(201).json({ message: "lookingFor Data saved successfully" });
        } catch (error) {
          console.error("Error saving data:", error);
          res.status(500).json({ error: "Internal Server Error" });
        }
      
}

export  { createHire };
