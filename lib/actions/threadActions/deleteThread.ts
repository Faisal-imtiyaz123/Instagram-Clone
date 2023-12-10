"use server"
import { DbUser } from "@/lib/types/userTypes";
import { fetchUser } from "../userActions/fetchUser";
import Thread from "@/lib/Models/ThreadModel";
import User from "@/lib/Models/UserModel";
import { threadId } from "@/lib/types/threadTypes";



export async function deleteThread(threadId:string){
    try{
        const threadMongoId = JSON.parse(threadId) as threadId
        const user = await fetchUser() as DbUser
        await Thread.findByIdAndDelete(threadMongoId);
        await User.findByIdAndUpdate(user._id,{$pop:{threads:threadMongoId}})
    }catch(err:any){
        throw new Error(`Delete Thread Error: ${err.message}`)
    }


}