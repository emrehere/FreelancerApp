import mongoose from "mongoose";
import MyFreelancerInfo from "../models/freelancerModel.js";

async function createFreelancer(req, res) {

  const userId = req.user._id;
  console.log("userId", userId)


  try {


    console.log("req.body", req.body)
    const { freelancerInfo } = req.body;


    const myFreelancerInfoInstance = new MyFreelancerInfo({ freelancerInfo, userId });
    console.log("myFreelancerInfoInstance", myFreelancerInfoInstance)
    await myFreelancerInfoInstance.save();


    res.status(201).json({ message: "freelancerinfo Data saved successfully" });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }

}

async function getAllFreelancers(req, res) {
  console.log("getAllFreelancers")
  try {
 
    const allFreelancers = await MyFreelancerInfo.find();

    console.log("allFreelancers", allFreelancers)

    if (!allFreelancers) {
      return res.status(404).json({ message: "No freelancers found" });
    }

    res.status(200).json({ allFreelancers });
  } catch (error) {
    console.error("Error fetching job notices:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export { createFreelancer, getAllFreelancers };
