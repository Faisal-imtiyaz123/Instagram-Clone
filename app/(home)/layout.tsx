
import { CreateModal } from "@/components/uiCustom/Modals/CreateModal";
import LeftSideBar from "@/components/uiCustom/Navigation/LeftSideBar";
import NotificationSlider from "@/components/uiCustom/Notifications/NotificationSlider";
import SearchBar from "@/components/uiCustom/Search/searchBar";
import { fetchUser } from "@/lib/actions/userActions/fetchUser";
import { RefProvider } from "@/lib/hooks/useContext";
import { DbUser } from "@/lib/types/userTypes";
import {Toaster} from "sonner"


export default async function layout({
    children
}:{children:React.ReactNode}){
  const user = await fetchUser<DbUser>();
  const userImg = user?.image;
 

  return (
    <div className="flex">
      <RefProvider>
        <LeftSideBar userImg={userImg}  />
        <SearchBar/>
        <NotificationSlider/>
        <CreateModal/>
      </RefProvider>
        <div className="grow">
        {children}

        </div>
        <Toaster position="top-center"/>
        
    </div>
  )
}
