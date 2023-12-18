"use client";

import { Input } from "@/components/ui/input";
import { searchUsers } from "@/lib/actions/userActions/searchUsers";
import { DbUser } from "@/lib/types/userTypes";
import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SearchedUserList from "./SearchedUserList";
import { fetchUserDbId } from "@/lib/actions/userActions/fetchUserDbId";
import { useSearchStore } from "@/lib/Zustand-store/SearchStore";
import { useRefContext } from "@/lib/hooks/useContext";


export default function SearchBar() {
  const [matchingUsers, setMatchingUsers] = useState<DbUser[]>([]);
  const { toggle, isOpen,opened } = useSearchStore((s) => s);
  const sheetRef = useRef<HTMLDivElement>(null)
  const context = useRefContext()
  const searchBtn = document.getElementById('search-btn')
 
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (sheetRef.current && !sheetRef.current.contains(e.target as Node) && isOpen) {
        console.log(e.target !== context?.searchNavLinkRef.current)
        if( e.target !== context?.searchNavLinkRef.current  && e.target !== context?.searchIconRef.current )
        toggle();
      }

     
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen, toggle,searchBtn,context?.searchNavLinkRef,context?.searchIconRef]);

  return (
    <div
      ref={sheetRef}
      className={` ${isOpen?'fixed':''} left-[5rem] h-screen bg-gray-100
       ${ isOpen ? " w-[30rem] animate-slideOut" : opened?'animate-slideIn':''}`}
    >
      {isOpen && 
    

         <div className="flex p-4  left-0">
           <label>Search</label>
           <Input
             onChange={async (e) => {
               const currentUserId = await fetchUserDbId();
               const users = (await searchUsers(
                 e.target.value,
                 currentUserId.toString()
               )) as DbUser[];
               setMatchingUsers(() => (e.target.value ? users : []));
             }}
           />
           <Search />
           <SearchedUserList matchingUsers={matchingUsers} />
         </div>
       
    }

    </div>
  );
}
