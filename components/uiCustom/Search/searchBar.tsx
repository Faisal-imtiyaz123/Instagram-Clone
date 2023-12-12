"use client"

import { Input } from "@/components/ui/input"
import { searchUsers } from "@/lib/actions/userActions/searchUsers"
import { DbUser } from "@/lib/types/userTypes"
import { Search } from "lucide-react"
import { useState } from "react"
import SearchedUserList from "./SearchedUserList"

export default function SearchBar({userId}:{userId:string}) {
  const [matchingUsers,setMatchingUsers] = useState<DbUser[]>([])
  
  return (
    <div className="flex p-4">
        <label>Search</label>
        <Input onChange={async(e)=>{
            const users = await searchUsers(e.target.value,userId) as DbUser[]
            setMatchingUsers(()=>e.target.value?users:[])
            
            }}/>
        <Search/>
    <SearchedUserList matchingUsers={matchingUsers}/>
    </div>
  )
}
