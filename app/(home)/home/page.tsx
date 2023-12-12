import HomeThreadCard from "@/components/uiCustom/Threads/HomeThreadCard"
import User from "@/lib/Models/UserModel"
import { fetchThreads } from "@/lib/actions/threadActions/fetchThreads"
import { fetchUser } from "@/lib/actions/userActions/fetchUser"
import { DbThread } from "@/lib/types/threadTypes"
import { DbUser } from "@/lib/types/userTypes"
import { currentUser } from "@clerk/nextjs"
import { redirect } from "next/navigation"





export default async function HomePage() {
  const user = await fetchUser() as DbUser
  if(!user){
      const newUser = await currentUser()
      await User.create({id: newUser?.id, name:"name",username:"username"})
      redirect('/home/onboarding')
    }
    const threads = await fetchThreads() as DbThread[]
    

  
  return (
    <div className="flex justify-center w-full bg-gray-100">
      {threads.map((thread)=> <HomeThreadCard key={thread.title} thread={thread} userImage={user.image}/>)}
    </div>
  )
}
