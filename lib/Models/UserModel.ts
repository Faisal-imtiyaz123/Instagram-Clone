import mongoose from "mongoose";
import { boolean, string } from "zod";



const userSchema = new mongoose.Schema({
  id:{type:String, required:true},
  username: {
    type: String,
    unique: true,
    required: true,
   
  },
  name: {
    type: String,
    required: true,
  },
  image: String,
  bio: String,
  threads: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Thread",
    },
  ],
  onboarded: {
    type: Boolean,
    default: false,
  },
  communities: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Community",
    },
  ],
  followers:[
    {
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
  }
],
following:[{
  type:mongoose.Schema.Types.ObjectId,
    ref:'User',
}],
messagedUsers:[{
  type:mongoose.Schema.Types.ObjectId,
  ref:'User'
}],
requestedUsers:[{
  type:mongoose.Schema.Types.ObjectId,
  ref:'User'
}],
requestingUsers:[
  {
  type:mongoose.Schema.Types.ObjectId,
  ref:'User'
  }
],
blockedUsers:[{
  type:mongoose.Schema.Types.ObjectId,
  ref:'User'
}],
mutedAccounts:[{
  type:mongoose.Schema.Types.ObjectId,
  ref:'User'
}],
accountSettings:{
  pushNotifications:{
    type:mongoose.Schema.Types.Mixed,
  },
  accountType:{type:Boolean},
  otherUserInteractio :{
    type:mongoose.Schema.Types.Mixed,

  }

  
}

});


const User = mongoose.models.User || mongoose.model("User", userSchema);


export default User;
