import mongoose from 'mongoose';

const myHireSchema = new mongoose.Schema({
  hireInfo: {
    type: Object,
    required: true
  },
  userId: {
    type: String,
    required: true
  }
});


const MyHireInfo = mongoose.model('MyHireInfo', myHireSchema);

export default MyHireInfo