import mongoose from "mongoose"

export interface threadType {
    title:string,
    description:string
}
export interface DbThread {
    _id:mongoose.Schema.Types.ObjectId,
    title: string;
    description: string;
    comments: mongoose.Schema.Types.ObjectId[];
    authorId: mongoose.Schema.Types.ObjectId;
    image?: string;
    children: mongoose.Schema.Types.ObjectId[];
    createdAt: Date;

}
export type threadId = mongoose.Schema.Types.ObjectId
