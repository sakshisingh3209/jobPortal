import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

function HeroSection() {

  const [query,setQuery]=useState("");
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const searchJobHandler=()=>{
    dispatch(setSearchedQuery(query));
    navigate('/browse');
  }
  return (
    <>
      <div className="text-center">
        <div className=" flex flex-col gap-5 my-10">
          <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium">
            No.1 Job hunt website
          </span>
          <h1 className="text-5xl font-bold">
            Search,Apply &<br />
            Get Your <span className="text-[#6A38C2]">Dream Jobs</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            corporis excepturi veniam quae? Nam?
          </p>
          <div className=" flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full item-center gap-4 mx-auto">
            <input
              type="text "
              placeholder="Find your dream jobs"
              onChange={(e)=>setQuery(e.target.value)}
              className="outline-none border-none w-full"
            />
            <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2]">
              <Search className="h-5 w-5 "></Search>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
