"use client"

import { X } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import DisplayThreadModal from "../Threads/DisplayThreadModal"
import DisplayCommentsModal from "./DisplayCommentsModal"
import { ModalThread } from "@/lib/types/threadTypes"

type setIsModalOpen=(isModalOpen:boolean)=>void

export default function DisplayThreadAndCommentModal({children}:{children:React.ReactNode}) {
    // const[isMounted, setIsMounted] = useState(false)
    const [isModalOpen,setIsModalOpen]= useState(false)
    console.log(isModalOpen)
    const modalRef = useRef<HTMLDivElement>(null)
    // useEffect(()=>{
    //  setIsMounted(true)
    // },[])

    useEffect(()=>{
     const handleClickOutside =(e:MouseEvent)=>{
         if(modalRef.current && !modalRef.current.contains(e.target as Node)) {
            setIsModalOpen(false)
        }
    }
        if(isModalOpen){
            document.addEventListener('mousedown',handleClickOutside)
        }
        return ()=>{
            document.removeEventListener('mousedown',handleClickOutside)
        }
     
    },[isModalOpen])
  

//   if(!isMounted) return null
  return (
    <div >
    <div>
      <span onClick={()=>setIsModalOpen(true)} className="text-xs cursor-pointer">
        View all Comments 
      </span>
     { isModalOpen&&
      <div 
        className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 custom-modal ${
          isModalOpen ? 'active' : ''
        }`}
      >
        <div ref={modalRef} className="bg-white p-6 h-[40rem] w-[60rem]">
          <span onClick={()=>setIsModalOpen(false)} className="absolute top-0 right-0 text-xl cursor-pointer">
            <div className="p-2">

           <X/>
            </div>
          </span>
          <div className="flex">
           {children}
          </div> 
        </div>
      </div>
}
    </div>
    </div>
  )
}
