import React, { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import useGetSingleJob from "@/hooks/useGetSingleJob";
import { useParams } from "react-router-dom";
import { APPLICATION_END_POINT, JOB_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setSingleJob } from "@/redux/jobSlice";
import { toast } from "sonner";

function JobDescription() {
  const isInitiallyApplied = singleJob?.applications?.some(application.applicant===user?._id) || false;
  const [isApplied,setIsApplied]= useState(isInitiallyApplied);

  const params=useParams();
  const{singleJob}= useSelector(store=>store.job);
  const {user}= useSelector(store=>store.auth);
  
  const jobId= params.id;
       
const dispatch=useDispatch();

const applyJobHandler=async()=>{
  try{
const res= await axios.get(`${APPLICATION_END_POINT}/apply/${jobId}`,{withCredentials:true});
if(res.data.success){
  setIsApplied(true);  //update the local state
  const updateSingleJob={...singleJob,applications:[...singleJob.applications,{applicant:user._id}]};
  dispatch(setSingleJob(updateSingleJob));  //helps us to update the UI in real time
  toast.success(res.data.message);
}
  }catch(error){
console.log(error);
toast.error(error.response.data.message);
  }
}



  useEffect(()=>{
    const fetchSingleJob=async()=>{
        try{
         const res= await axios.get(`${JOB_API_END_POINT}/get/${jobId}`,{
            withCredentials:true
         });
         if(res.data.success){
            dispatchEvent(setSingleJob(res.data.job));
            setIsApplied(res.data.job.applications.some(application=>application.applicant===user?._id));    //ensure the state is in sync with fetched data
         }
        }catch(error){
            console.log(error);
        }
    }
    fetchSingleJob();
},[jobId,dispatch,user?._id])       
  return (
    <>
      <div className="max-w-7xl mx-auto my-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-bold text-xl"> {singleJob?.title} </h1>
            <div className="flex items-center gap-2 mt-4">
              <Badge className={"text-blue-700 font-bold"} variant="ghost">
                {singleJob?.position} Positions
              </Badge>
              <Badge className={" text-[#F83002]font-bold"} variant="ghost">
              {singleJob?.jobType}
              </Badge>
              <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
                {singleJob?.salary} LPA
              </Badge>
            </div>
          </div>
          <Button
          onClick={isApplied?null : applyJobHandler}
            disabled={isApplied}
            className={`rounded-lg 
          ${
            isApplied
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-[#7209b7] hover:bg-[#53F2AD]"
          }`}
          >
            {isApplied ? "Already Applied" : "ApplyNow"}
          </Button>
        </div>
        <h1 className="border-b-2 border-b-gray-300 font-medium py-4">
          Job Description
        </h1>
        <div className="my-4">
          <h1 className="font-bold my-1">
            Role:
            <span className="pl-4 font-normal text-gray-800">
         {singleJob?.title}
            </span>
          </h1>
          <h1 className="font-bold my-1">
        {singleJob?.location}
            <span className="pl-4 font-normal text-gray-800">Hyderabad</span>
          </h1>
          <h1 className="font-bold my-1">
      {singleJob?.description}
            <span className="pl-4 font-normal text-gray-800">
              
            </span>
          </h1>
          <h1 className="font-bold my-1">
            {singleJob?.experience} yrs
            <span className="pl-4 font-normal text-gray-800">2yrs</span>
          </h1>
          <h1 className="font-bold my-1">
            {singleJob?.salary}:<span className="pl-4 font-normal text-gray-800">12LPA</span>
          </h1>
          <h1 className="font-bold my-1">
            {singleJob?.application?.length}
            <span className="pl-4 font-normal text-gray-800">4</span>
          </h1>
          <h1 className="font-bold my-1">
         {singleJob?.createdAt.split("T")[0]}
            <span className="pl-4 font-normal text-gray-800">4-10-2024</span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default JobDescription;
