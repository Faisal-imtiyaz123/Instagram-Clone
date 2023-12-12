"use server"


import Comment from "@/lib/Models/CommentModel";
import Thread from "@/lib/Models/ThreadModel";
import { threadId } from "@/lib/types/threadTypes";
import { DbUser, authorId } from "@/lib/types/userTypes";
import { fetchUser } from "../userActions/fetchUser";
import { pusher } from "@/lib/pusher";
import { revalidatePath } from "next/cache";


export async function createComment(comment:string,threadId:threadId){
    try{
        const user = await fetchUser() as DbUser
        const newComment = new Comment({comment:comment,threadId:threadId,authorId:user._id})
        const savedComment = await newComment.save()
        await Thread.findByIdAndUpdate(threadId,{$push:{comments:savedComment._id}})
        pusher.trigger('comment-creation','newComment',{
            comment
        })



    }catch(err:any){
        throw new Error(`createComment error: ${err.message}`);

    }
    

}