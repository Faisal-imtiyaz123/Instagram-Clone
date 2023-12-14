import { DbUser } from "@/lib/types/userTypes";
import SearchedUser from "./SearchedUser";


export default function SearchedUserList({matchingUsers}:{matchingUsers:DbUser[]}) {
  return (
    <div className="flex">
      {matchingUsers.map(user=><SearchedUser key={user._id.toString()} user={{userId:user._id.toString(),username:user.username}} />)}
    </div>
  )
}
