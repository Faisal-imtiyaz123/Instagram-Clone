import MessagingSideBar from "@/components/uiCustom/Messaging/MessagingSideBar";


export default function messagingLayout(props:{children:React.ReactNode,inbox:React.ReactNode,userId:React.ReactNode}) {
  return (
    <div className="flex " >
      <MessagingSideBar/>
    
        <div className="grow">

        {props.children}
        </div>
    </div>
  )
}
