import mongoose from "mongoose"

export interface threadType {
    title:string,
    description:string
}
export interface DbThread {
    _id:string,
    title: string;
    description: string;
    comments: string[];
    authorId: string;
    image?: string;
    children: string[];
    createdAt: Date;

}
export type threadId = mongoose.Schema.Types.ObjectId
