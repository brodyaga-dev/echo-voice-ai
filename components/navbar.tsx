
import MobileSidebar from "@/components/mobile-sidebar";
import Link from "next/link";

// import { signOut, useSession } from "next-auth/react";
import {Button} from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getApiLimitCount } from "@/lib/api-limit";



const Navbar = async () => {
  const apiLimitCount = await getApiLimitCount()
   const session = await getServerSession(authOptions)
   console.log("session", session)
    return (
        <div className="flex items-center p-4">
             <MobileSidebar apiLimitCount={apiLimitCount} />
             <div className="flex w-full justify-end">
             <DropdownMenu>
                <DropdownMenuTrigger className="cursor-pointer" asChild>
                        <Avatar>
                   <AvatarImage src={session?.user.image} />
  <AvatarFallback>CN</AvatarFallback>
            </Avatar>
                </DropdownMenuTrigger>
       <DropdownMenuContent className="mt-4 mr-1 z-10">
       <DropdownMenuItem className='mb-2 mt-2'>
                  <Link href={`/dashboard`}>
                    Dashboard
                  </Link>
                </DropdownMenuItem>
       <DropdownMenuItem className='mb-2 mt-2'>
                  <Link href={`/dashboard`}>
                    Your Account
                  </Link>
                </DropdownMenuItem>
       <DropdownMenuItem className='mb-2 mt-2'>
                  <Link href={`/dashboard`}>
                    Settings
                  </Link>
                </DropdownMenuItem>
                <Link href={'/signout'}>
       <DropdownMenuItem className='mb-2 mt-2'>
                  {/* <Button onClick={() => signOut()} variant='ghost'>
                    Sign out
                  </Button> */}Sign out
                </DropdownMenuItem>
                </Link>
       </DropdownMenuContent>
            </DropdownMenu>
             </div>
        </div>
    )
}

export default Navbar;