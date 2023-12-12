"use server"

import { connectToDB } from "@/lib/mongoose";
import User from "@/lib/Models/UserModel";
import { DbUser } from "../../types/userTypes";
import { currentUser } from "@clerk/nextjs";


export async function fetchUser<TOut>():Promise<DbUser|TOut|null>{
    const user = await currentUser()
    try{
        console.log(user?.id,"user id")
        connectToDB()
        const userData = await User.findOne({id:user?.id})
        return userData 
    }catch(err){
        throw new Error("Failed to fetch user")

    }

}
