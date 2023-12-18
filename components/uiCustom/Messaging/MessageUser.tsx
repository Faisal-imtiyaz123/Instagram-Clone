import {follower } from "@/lib/types/otherUsersTypes";
import Link from "next/link";

export default function MessageUser({user}:{user:follower}) {
  return (
    <div>
        <Link href={`/home/messaging/${user._id.toString()}`}>
        {user.name}
        </Link>
    </div>
  )
}
