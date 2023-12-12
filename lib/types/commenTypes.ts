import mongoose from "mongoose"

export interface CommentType{
    comment: string
}
export interface DbComment{
    _id:mongoose.Schema.Types.ObjectId,
    comment:string,
    authorId:mongoose.Schema.Types.ObjectId,
    threadId:mongoose.Schema.Types.ObjectId,
}
interface commentObject{
    comment:string
    _id:mongoose.Schema.Types.ObjectId
}
export type ThreadComments= commentObject[]

export interface ThreadCommentsObject{
    comments:ThreadComments
}
export interface CommentObj {
    comments:ThreadComments
}
export type commentId = mongoose.Schema.Types.ObjectId