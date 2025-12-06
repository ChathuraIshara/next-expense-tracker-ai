import Guest from "@/components/Guest";
import { currentUser } from "@clerk/nextjs/server"

const HomePage = async () => {
  const user = await currentUser() ;
  if(!user)
    {
      return <Guest/>
    } 
  return (
    <div className='text-red-400'>page</div>
  )
}

export default HomePage;