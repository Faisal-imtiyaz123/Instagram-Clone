import LeftSideBar from "@/components/uiCustom/Navigation/LeftSideBar";
import {Toaster} from "sonner"


export default function layout({
    children
}:{children:React.ReactNode}){
  return (
    <div className="flex">
        <LeftSideBar/>
        {children}
        <Toaster position="top-center"/>
        
    </div>
  )
}
