
import DisplayCommentsModal from "@/components/uiCustom/Modals/DisplayCommentsModal"
import DisplayThreadAndCommentModal from "@/components/uiCustom/Modals/DisplayThreadAndCommentModal"
import DisplayThreadModal from "@/components/uiCustom/Threads/DisplayThreadModal"
import { fetchThread } from "@/lib/actions/threadActions/fetchThread"
import { threadId } from "@/lib/types/threadTypes"
import { Divide } from "lucide-react"
import { Suspense } from "react"


interface thread{
  _id:threadId,
  title:string,
  description:string
}

export default async function ThreadIdPage({params}:{params:{threadId:threadId}}) {
  const thread = await fetchThread(params.threadId) as thread
  return (
    <div>
  <DisplayThreadAndCommentModal>
  <DisplayThreadModal title={thread.title} description={thread.description}/>
  <Suspense fallback={<div>Loading</div>}>

  <DisplayCommentsModal threadId={thread._id}/>
  </Suspense>
 </DisplayThreadAndCommentModal>
    
 </div>
   
  )
}
