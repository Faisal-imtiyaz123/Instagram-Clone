import mongoose from "mongoose"

export interface follower{
    _id:mongoose.Schema.Types.ObjectId
    username:string,
    name:string
}
export  type followers = follower[]

export  type followed = follower[]


