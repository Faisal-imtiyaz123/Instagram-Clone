"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { sendMessage } from "@/lib/actions/messaging/sendMessage"
import { pusherClient } from "@/lib/pusher"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import {z} from "zod"
import Message from "./Message"

const messageSchema= z.object({
    message:z.string()
})

export default function MainMessagingPage({recieverId,senderId,messagesArr}:{recieverId:string,senderId:string,messagesArr:{message:string,sent?:boolean,id:string}[]}) {
  const [messages,setMessages] = useState<{message:string,sent?:boolean,id:string}[]>(messagesArr)
  const form = useForm({
    resolver:zodResolver(messageSchema),
    defaultValues:{
        message:""
    }
  })
  useEffect(()=>{
    pusherClient.subscribe(recieverId)
    pusherClient.bind('message',async (message:{message:string,sent:boolean,id:string})=>{
        setMessages([...messages,message])
    })

  },[recieverId,messages])

  async function onSubmit(values:z.infer<typeof messageSchema>){
    await sendMessage(values.message,senderId,recieverId)
    form.reset()
    

  }
  
  return (
    <div>
        <div className="absolute bottom-4 right-2 " >

       {messages.map(messageObj=><Message key={messageObj.id} messageObj={messageObj}/>)}
        </div>
        <div className="fixed bottom-4">
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex items-center">
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="flex items-center gap-4">
              <FormLabel>Message</FormLabel>
              <FormControl className="w-[40rem]">
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>

        { form.getValues("message")?
        <Button type="submit" >send</Button>:""}
        </div>
      </form>
    </Form>
        </div>
    </div>
  )
}
