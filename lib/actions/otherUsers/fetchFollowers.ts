"use server"

import User from "@/lib/Models/UserModel"
import { connectToDB } from "@/lib/mongoose"
import { currentUser } from "@clerk/nextjs"

// export async function fetchFollowers(){
//     try{
//         connectToDB()
//         const user = await currentUser()
//         const followers = await User.findById(user?.id).populate({path:"followers",model:User,select:""})
//     }
// }