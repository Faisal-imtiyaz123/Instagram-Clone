import { DbUser } from "@/lib/types/userTypes";


export default function SearchedUserList({matchingUsers}:{matchingUsers:DbUser[]}) {
  return (
    <div>
      {matchingUsers.map(user=>user.name)}
    </div>
  )
}
