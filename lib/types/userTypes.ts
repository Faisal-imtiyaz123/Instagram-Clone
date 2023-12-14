import mongoose from "mongoose"

export interface user{
    id:string
    username:string
    name:string
    bio:string
    image:string
    onboarded?:boolean
    friends:mongoose.Schema.Types.ObjectId[]

}

export interface DbUser extends user {
    _id:mongoose.Schema.Types.ObjectId
}

export type authorId = mongoose.Schema.Types.ObjectId

