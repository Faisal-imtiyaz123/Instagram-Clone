"use server"


import Comment from "@/lib/Models/CommentModel";
import Thread from "@/lib/Models/ThreadModel";
import { threadId } from "@/lib/types/threadTypes";

export async function fetchComments(threadId:threadId){
    try{

        const commentObj = await Thread.findById(threadId).populate({path:'comments',model:Comment,select:'comment -_id'}).select('comments')
        return commentObj;
    }catch(err:any){
        throw new Error(`Could not fetch comments: ${err.message}`)

    }

}