import { Button } from "@/components/ui/button";
import Link from "next/link";



export default function DashNav() {
  return (
   <nav className="border border-b h-14 flex items-center justify-between sticky">
   

    <div className="p-3 text-lg text-light">
        Threads
    </div>
    <div className="flex gap-2 p-3">
       
        <Button className="bg-gray-700">
            <Link href="/sign-in">
             Login
            </Link>
           
        </Button>
       <Button variant="outline" className="border-gray-700">
            Sign Up
        </Button>

    </div>
   </nav>
  )
  }
