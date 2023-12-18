"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useCreateModal } from "@/lib/Zustand-store/createModalStore"
import { useEffect, useRef } from "react"

export function CreateModal() {
  const {isModalOpen,toggleModal} = useCreateModal()
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    function handleOutSideClick(e:MouseEvent){
        if(modalRef.current && !modalRef.current.contains(e.target as Node)){
            toggleModal()
        }
    }
    document.addEventListener('mousedown',handleOutSideClick)
    return () => {document.removeEventListener('mousedown',handleOutSideClick)}

  },[])
 
  return (
    isModalOpen &&
<div className="w-screen h-screen bg-gray-800 bg-opacity-50 fixed flex items-center justify-center">
    <div className=" bg-white w-[30rem] h-[30rem] rounded-lg ">
        <p className="text-center border-b border-b-gray-300 p-2">Create Post</p>
        <span>Drag files from your Computer</span>
        <div>
            <Input type="file"/>
        </div>

    </div>

     
    </div>

    
  )
  
}
