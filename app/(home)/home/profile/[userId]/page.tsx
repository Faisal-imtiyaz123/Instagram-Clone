
import OtherUserProfile from "@/components/uiCustom/Profile/OtherUserProfile"
import { fetchUser } from "@/lib/actions/userActions/fetchUser"
import { DbUser} from "@/lib/types/userTypes"
import { redirect } from "next/navigation"


export default async  function otherUserProfilePage({params}:{params:{userId:string}}) {
  const user = await fetchUser<DbUser>()
  if(!user) return null
  if(params.userId == user._id.toString()) redirect('/home/profile')
  return (
    <div>
        <OtherUserProfile userId={user._id.toString()}/>
    </div>
  )
}
