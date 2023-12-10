import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavigationRoute } from "@/Constants/navigationRoutes";
import Link from "next/link";

export default function NavigationRoute({navigationRouteItem}:{navigationRouteItem:NavigationRoute}) {
  return (
  


        
      <Link href={navigationRouteItem.route} className='flex gap-4 items-center p-3 hover:bg-gray-100 rounded-lg' >
    

        <FontAwesomeIcon  icon={navigationRouteItem.icon} width={28} height={28} />
        <div className='text-[1rem] text-center hidden md:block'>
        {navigationRouteItem.routeName}
        </div>

      </Link>

  )
}
