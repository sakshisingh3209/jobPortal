import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

function Job() {
  const navigate= useNavigate();
  const jobId= "lsnjnfjnajr";
  return (
    <>
      <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">2 days ago</p>
          <Button variant="outline" className="rounded-full">
            <Bookmark />
          </Button>
        </div>

        <div className="flex items-center gap-2 my-2 ">
          <Button>
            <Avatar>
              <AvatarImage src="https://img.freepik.com/premium-vector/minimalist-logo-design-any-corporate-brand-business-company_1253202-77511.jpg"></AvatarImage>
            </Avatar>
          </Button>
          <div>
            <h1 className="font-medium text-lg"> Company Name</h1>
            <p className="text-sm text-gray-500">India</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-lg my-2">Title</h1>
          <p className="text-small text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            earum consequuntur eos, cumque officia esse neque doloribus dolor
            assumenda soluta?
          </p>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <Badge className={"text-blue-700 font-bold"} variant="ghost">
            12 Positions
          </Badge>
          <Badge className={" text-[#F83002]font-bold"} variant="ghost">
            Part Time
          </Badge>
          <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
            24LPA
          </Badge>
        </div>
        <div className="flex items-center gap-4 mt-4">
        <Button onClick={() => navigate(`/description/${jobId}`)} variant="outline">Details</Button>
            <Button className="bg-[#7209b7] ">Save For Later</Button>
        </div>
      </div>
    </>
  );
}

export default Job;
