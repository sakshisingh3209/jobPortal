import { LogOut, User2 } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

function Navbar() {
  
  const {user}=useSelector(store=>store.auth)
  return (
    <>
      <div className="bg-white">
        <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
          <div>
            <h1 className="text-2xl  font-bold">
              Job <span className="text-[#F83002]">Portal</span>
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <ul className="flex font-medium items-center gap-5">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/jobs">Jobs</Link></li>
              <li><Link to="/browse">Browse</Link></li>
            </ul>
{
  !user?(
    <div className="flex items-center gap-2">
      <Link to='/login'><Button variant="outline">Login</Button></Link>
<Link to='/signup'><Button className="bg-[#6A38C2] hover:bg-[#340585]">Signup</Button></Link>
    </div>
  ):(
    <Popover>
    <PopoverTrigger asChild>
      <Avatar className="cursor-pointer">
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="@shadcn"
        ></AvatarImage>
      </Avatar>
    </PopoverTrigger>
    <PopoverContent className="">
      <div className=" flex gap-4 space-y-2">
        <Avatar className="cursor-pointer">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="@shadcn"
          ></AvatarImage>
        </Avatar>
        <div>
          <h4 className="font-medium">Patel MernStack</h4>
          <h4 className="text-sm text-muted-foreground">
            Patel MernStack
          </h4>
        </div>
      </div>
      <div className=" flex flex-col m-2 text-gray-600">
        <div className="flex w-fit items-center gap-2 cursor-pointer">
          <User2/>
          <Button variant="link"><Link to="/profile">View Profile</Link></Button>
        </div>
        <div className=" flex w-fit items-center gap-2 cursor-pointer">
          <LogOut/>
          <Button variant="link">Logout</Button>
        </div>
      </div>
    </PopoverContent>
  </Popover>
  )
}



          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
