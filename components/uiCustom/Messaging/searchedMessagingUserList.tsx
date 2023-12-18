import { followed } from "@/lib/types/otherUsersTypes";
import MessageUser from "./MessageUser";


export default function SearchedMessagingUserList({matchingUsers}:{matchingUsers:followed}) {
  return (
    <div>
        {matchingUsers.map(user=><MessageUser key={user._id.toString()} user={user}/>)}
    </div>
  )
}
