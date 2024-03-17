import mongoose from 'mongoose';

const myFreelancerSchema = new mongoose.Schema({
  freelancerInfo: {
    type: Object,
    required: true
  },
  userId: {
    type: String,
    required: true
  }
});


const MyFreelancerInfo = mongoose.model('MyFreelancerInfo', myFreelancerSchema);

export default MyFreelancerInfo