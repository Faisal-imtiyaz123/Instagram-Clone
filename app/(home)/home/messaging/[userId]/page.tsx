import MainMessagingPage from "@/components/uiCustom/Messaging/MainMessagingPage";
import { fetchMessages } from "@/lib/actions/messaging/fetchMessages";
import { fetchUser } from "@/lib/actions/userActions/fetchUser";
import { fetchUserId } from "@/lib/actions/userActions/fetchUserId";
import { DbUser } from "@/lib/types/userTypes";

export default async function page({params}:{params:{userId:string}}) {
  const currentUser = await fetchUser<DbUser>()
  if(!currentUser) return null
  console.log(currentUser._id)
  const messages = await fetchMessages(currentUser._id.toString(),params.userId)
  if(!messages) return null
  const messagesArr:{message:string,sent:boolean,id:string}[]=[]
  messages.map((messageObj)=>{
    console.log(messageObj.senderId.toString()==currentUser._id.toString())
    if(messageObj.senderId.toString()==currentUser._id.toString())messageObj.sent=true
    messagesArr.push({message:messageObj.message,sent:messageObj.sent?true:false,id:messageObj._id.toString()})
  
  })

  return (
    <div className="bg-gray-100 h-screen rounded-lg relative overflow-scroll">
    <MainMessagingPage messagesArr={messagesArr}  senderId={currentUser._id.toString()} recieverId={params.userId}/>
    </div>
  )
}
