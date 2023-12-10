import User from "@/lib/Models/UserModel"
import { connectToDB } from "@/lib/mongoose"
import { currentUser } from "@clerk/nextjs"
import { redirect } from "next/navigation"





export default async function Page() {
  
    const user = await currentUser()
    connectToDB()
    const userExists = await User.findOne({id: user?.id})
    if(!userExists){
      await User.create({id: user?.id, name:"name",username:"username"})
      redirect('/home/onboarding')
    }

  
  return (
    <div>Main page</div>
  )
}
