import SearchBar from "@/components/uiCustom/Search/searchBar"
import { fetchUser } from "@/lib/actions/userActions/fetchUser"
import { DbUser } from "@/lib/types/userTypes"


export default async function searchPage() { 
  const user = await fetchUser() as DbUser
  return (
    <div>
        <SearchBar userId={user._id.toString()}/>

    </div>
  )
}
