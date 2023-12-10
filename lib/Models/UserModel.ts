import mongoose from "mongoose";

interface User{
  id: string,
  username: string,
  name:string,
  image?:string,
  bio?:string,
  onboarded?:boolean,
  threads?:mongoose.Schema.Types.ObjectId[],
  communities?:mongoose.Schema.Types.ObjectId[],

}
const userSchema = new mongoose.Schema<User>({
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
});

const User = mongoose.models.User || mongoose.model<User>("User", userSchema);

export default User;
