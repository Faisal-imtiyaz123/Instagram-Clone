"use client"


import { useEffect } from "react"

export default function CommentModalItem({comment}:{comment:string}) {
 
  return (
    <div className="bg-gray-100 border-b">
        {comment}
     
    </div>
  )
}
