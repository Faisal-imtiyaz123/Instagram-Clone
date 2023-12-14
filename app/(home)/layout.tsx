import LeftSideBar from "@/components/uiCustom/Navigation/LeftSideBar";
import User from "@/lib/Models/UserModel";
import { fetchUser } from "@/lib/actions/userActions/fetchUser";
import { DbUser } from "@/lib/types/userTypes";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import {Toaster} from "sonner"


export default async function layout({
    children
}:{children:React.ReactNode}){
  const user = await fetchUser() as DbUser
  if(!user){
      const newUser = await currentUser()
      await User.create({id: newUser?.id, name:"name",username:"username"})
      redirect('/home/onboarding')
    }
  return (
    <div className="flex">
        <LeftSideBar/>
        {children}
        <Toaster position="top-center"/>
        
    </div>
  )
}
