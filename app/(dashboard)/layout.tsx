import DashNav from "./_components/dashNav";


export default function layout({
    children
}:{children:React.ReactNode}) {
  return (
    <div>
        <DashNav/>
        {children}
    </div>
  )
}
