import User from "@/lib/Models/UserModel";
import { fetchUserId } from "@/lib/actions/userActions/fetchUserId";
import { connectToDB } from "@/lib/mongoose";





export async function GET(req:Request){
    try{
        connectToDB()
        const userId = await fetchUserId()
        const data = await User.findById(userId).populate({model:User,path:'following',select:'name username'}).select('following')
        console.log(data)
        return Response.json({data})

    }catch(err:any){
        throw new Error(`Error fetching following users:${err.message}`)
    }
}