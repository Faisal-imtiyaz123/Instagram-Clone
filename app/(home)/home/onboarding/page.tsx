import AccountProfile from "@/components/forms/AccountProfile"
import { fetchUser } from "@/lib/actions/userActions/fetchUser"
import { user } from "@/lib/types/userTypes"
import { redirect } from "next/navigation"




export default async function Page() {
  const userData = await fetchUser<user>()
  if(userData?.onboarded) redirect("/home")
  return (
    <div className="flex justify-center py-8 h-screen ">
        <AccountProfile userData={userData} />
    </div>
  )
}
