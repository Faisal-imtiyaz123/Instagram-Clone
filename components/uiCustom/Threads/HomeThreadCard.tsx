
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DbThread } from "@/lib/types/threadTypes";
import DeleteThreadButton from "./deleteThreadButton";
import CommentForm from "../Forms/commentForm";
import DisplayThreadAndCommentModal from "../Modals/DisplayThreadAndCommentModal";
import DisplayCommentsModal from "../Modals/DisplayCommentsModal";
import DisplayThreadModal from "./DisplayThreadModal";






export default async function HomeThreadCard({thread,userImage}:{thread:DbThread,userImage:string}) {
  return (
    <div>
    <Card className="w-[50rem] h-[20rem]">
  <CardHeader>
    <div className="flex justify-between">
    <CardTitle>{thread.title}</CardTitle>
    <DeleteThreadButton threadId={thread._id}/>
    </div>
    <CardDescription></CardDescription>
  </CardHeader>
  <CardContent>
    <p>{thread.description}</p>
  </CardContent>
  {/* <div className="text-xs">
  <Dialog>
  <DialogTrigger>View all comments</DialogTrigger>
  <DialogContent className="w-[100rem] h-[40rem]">
    <DialogHeader className="w-[80rem]">
      <DialogDescription>
  
         <DisplayThreadModal thread={thread}/> 
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
</div> */}
 <DisplayThreadAndCommentModal>
  <DisplayThreadModal title={thread.title} description={thread.description}/>
  <DisplayCommentsModal threadId={thread._id}/>
 </DisplayThreadAndCommentModal>
  <CommentForm userImage={userImage} threadId={thread._id}/>
</Card>
 </div>
  )
}

