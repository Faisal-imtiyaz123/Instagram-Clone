
import ProfleTabs from "@/components/uiCustom/Profile/ProfleTabs";
import { fetchThreads } from "@/lib/actions/threadActions/fetchThreads";
import { DbThread} from "@/lib/types/threadTypes";


export default async function profilePage() {
  const threads = await fetchThreads() as DbThread[]| undefined
  if(!threads) return null
  return (
    <ProfleTabs threads={threads}/>
    
  )
}
