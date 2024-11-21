import {getServerSession} from 'next-auth'
import { redirect } from "next/navigation";
import { authOptions } from "./lib/auth";


export default async function Home() {
  const session = await getServerSession(authOptions)
  if(session?.user){
    return <div className='w-full h-screen flex justify-center items-center bg-gray-400 text-white font-bold'>
      Hello from page.tsx
    </div>
  }else{
    redirect('/auth/Signin')
  }
}