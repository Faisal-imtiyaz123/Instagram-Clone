
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DbThread } from "@/lib/types/threadTypes";
import DeleteThreadButton from "./deleteThreadButton";


export default function Thread({thread}:{thread:DbThread}) {
  return (
  <Card>
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
</Card>

  )
}
