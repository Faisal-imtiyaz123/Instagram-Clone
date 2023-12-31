import HomeThreadCard from "@/components/uiCustom/Threads/HomeThreadCard"

import { fetchThreads } from "@/lib/actions/threadActions/fetchThreads"
import { fetchUser } from "@/lib/actions/userActions/fetchUser"

import { DbThread } from "@/lib/types/threadTypes"
import { DbUser } from "@/lib/types/userTypes"






export default async function HomePage() {
 const user = await fetchUser() as DbUser
 const threads = await fetchThreads() as DbThread[]
    

  
  return (
    <div className="flex justify-center w-full bg-gray-100">
      thread
      {threads.map((thread)=> <HomeThreadCard key={thread.title} thread={thread} userImage={user.image}/>)}
    </div>
  )
}
