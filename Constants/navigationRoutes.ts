
import {  faHeart, faUser, faNoteSticky, IconDefinition, faMessage } from '@fortawesome/free-regular-svg-icons';
import { faHome,faSearch } from '@fortawesome/free-solid-svg-icons';
export interface NavigationRoute{
    routeName:string,
    route:string,
    icon:IconDefinition
}
export const navigationRoutes:NavigationRoute[] =[
    {routeName:"Home",route:"/home",icon:faHome},
    {routeName:"Search",route:"/home/search",icon:faSearch},
    {routeName:"Thread",route:"/home/thread",icon:faNoteSticky},
    {routeName:"Messaging",route:"/home/messaging",icon:faMessage},
    {routeName:"Notifications",route:"/home/notifications",icon:faHeart},
    {routeName:"Profile",route:"/home/profile",icon:faUser},
]