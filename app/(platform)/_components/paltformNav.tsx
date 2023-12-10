import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";



export default function PlatformNav() {
  return (
   <nav className="border border-b h-14 flex items-center justify-between sticky">
   

    <div className="p-3 text-lg text-light">
        Threads
    </div>
    <div className="p-4">
        <UserButton afterSignOutUrl="/"/>

    </div>
   </nav>
  )
  }
