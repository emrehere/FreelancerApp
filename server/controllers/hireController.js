import mongoose from "mongoose";
import MyHireInfo from "../models/hireModel.js";

async function createHire(req, res) {

  const userId = req.user._id;


  try {


    console.log("req.body", req.body)
    const { hireInfo } = req.body;


    const myHireInfoInstance = new MyHireInfo({ hireInfo, userId });
    console.log("myHireInfoInstance", myHireInfoInstance)
    await myHireInfoInstance.save();


    res.status(201).json({ message: "hireinfo Data saved successfully" });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }

}

async function getAllJobNotices(req, res) {
  console.log("getAllJobNotices")
  try {
 
    const jobNotices = await MyHireInfo.find();

    console.log("jobNotices", jobNotices)

    if (!jobNotices) {
      return res.status(404).json({ message: "No job notices found" });
    }

    res.status(200).json({ jobNotices });
  } catch (error) {
    console.error("Error fetching job notices:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export { createHire, getAllJobNotices };
