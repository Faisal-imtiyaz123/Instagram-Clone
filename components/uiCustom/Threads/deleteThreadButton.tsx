"use client"

import { Button } from "@/components/ui/button"
import { deleteThread } from "@/lib/actions/threadActions/deleteThread"
import { threadId } from "@/lib/types/threadTypes"
import { Trash2 } from "lucide-react"

export default function DeleteThreadButton({threadId}:{threadId:threadId}) {
  async function handleDeleteThread(){
    await deleteThread(threadId)
  }
  return (
    <Button variant="ghost" onClick={handleDeleteThread}>
        <Trash2 height={20} width={20}/>
    </Button>
  )
}
