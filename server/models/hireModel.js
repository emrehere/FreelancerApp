import mongoose from 'mongoose';

const myUserSchema = new mongoose.Schema({
  lookingFor : {
    type: Object,
    required: true
  },
  userId: {
    type: String,
    required: true
  }
});



const MyUserInfo = mongoose.model('MyUserInfo', myUserSchema);

export default MyUserInfo;