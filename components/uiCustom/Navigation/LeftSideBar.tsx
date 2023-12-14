import { navigationRoutes } from "@/Constants/navigationRoutes";
import NavigationRoute from "./NavigationRoute";
import { UserButton } from "@clerk/nextjs";
import { MoreDropDown } from "../More/MoreDialog";


export default function LeftSideBar() {
  return (
    <div className="flex flex-col lg:max-w-[30rem] h-screen border border-r pl-1 p-4 gap-2">
      <h1 className="text-3xl pl-2 text-gray-700 mb-4">Threads</h1>
        {navigationRoutes.map((navigationRouteItem)=><NavigationRoute key={navigationRouteItem.route} navigationRouteItem={navigationRouteItem}/>)}
        <div className="fixed bottom-4 left-4 bg-red-100 p-8 rounded-full">
          <UserButton afterSignOutUrl="/" />

        </div>
          <MoreDropDown/>
    </div>
  )
}
