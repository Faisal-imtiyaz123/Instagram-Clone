"use client";

import { Input } from "@/components/ui/input";

import { followed } from "@/lib/types/otherUsersTypes";

import React, { useState } from "react";
import SearchedMessagingUserList from "./searchedMessagingUserList";

export default function MessagingSideBar() {
  const [matchingUsers,setMatchingUsers] = useState<followed>([])
  return (
    <div className="w-[18rem] border-r h-screen">
      <div className="flex p-4">
        <label>Search</label>
        <Input
          onChange={async (e) => {
            const res = await fetch('/api/search',{method:"GET"})
            const data = await res.json()
            setMatchingUsers(e.target.value?data.data.following:[])
          
            // console.log(followedUsers)
            // setMatchingUsers(() => (e.target.value ? followedUsers.length : []));
          }}
        />
      </div>
      <SearchedMessagingUserList matchingUsers={matchingUsers}/>
    </div>
  );
}
