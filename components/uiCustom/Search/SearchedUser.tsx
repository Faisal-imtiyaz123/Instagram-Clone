import Link from "next/link";


export default function SearchedUser({user}:{user:{userId:string,username:string}}) {
  return (
    <Link href={`/home/profile/${user.userId}`}>
    <div>
      {user.username}
     
    </div>
    </Link>
  )
}

