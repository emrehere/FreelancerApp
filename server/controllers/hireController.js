import mongoose from "mongoose";
import MyUserInfo from "../models/hireModel.js";

async function createHire(req, res) {

        // console.log("req.user", req.user)
        // const userId = req.user._id;
        // console.log("my userid in controller", userId);
       
        // try {
       
      
        // //   const { whats inside the lookingFor } = req.body;
         
        // //   const user = { whats inside the lookingFor };
       
        // //   console.log("Saving data to MongoDB...", lookingFor);
        // //   const myUserInfoInstance = new MyUserInfo({ lookingFor, userId });
        // //   await myUserInfoInstance.save();
          
      
        //   res.status(201).json({ message: "lookingFor Data saved successfully" });
        // } catch (error) {
        //   console.error("Error saving data:", error);
        //   res.status(500).json({ error: "Internal Server Error" });
        // }
      
}
