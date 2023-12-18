import { RenderedMessageObj, messageObj } from "@/lib/types/messageTypes";


export default function Message({messageObj}:{messageObj:RenderedMessageObj}) {
  return (
    <div className={`${messageObj.sent?' bg-red-100 p-4 rounded-lg w-[5rem]':' left-2 bottom-1'} relative right-2`}>
      <div>

        {messageObj.message}
      </div>
    </div>
  )
}
