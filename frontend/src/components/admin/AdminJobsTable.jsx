import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

import { PopoverContent, PopoverTrigger } from "../ui/popover";
import { Popover } from "../ui/popover";
import { Edit2, Eye, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";


const AdminJobsTable = () => {
  const navigate= useNavigate();
  const { companies,searchCompanyByText} = useSelector((store) => store.company);
  const{allAdminJobs,SearchJobByText}= useSelector(store=>store.job)
  const [filterJobs,setFilterJobs]=useState(allAdminJobs);

  


useEffect(() => {
  if (Array.isArray(allAdminJobs)) {
    const filteredJobs = allAdminJobs.filter((job) => {
      if (!SearchJobByText) {
        return true; // Return all companies if there's no search text
      }
      return job?.tittle?.toLowerCase().includes(SearchJobByText.toLowerCase()) || job?.company?.name.toLowerCase.includes(SearchJobByText.toLowerCase());
    });
    setFilterJobs(filteredJobs);
  }
}, [allAdminJobs,searchCompanyByText]);

  return (
    <div>
      <Table>
        <TableCaption>A list of your recent posted jobs.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>CompanyName</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
          filterJobs?.map((job) => (
            <tr>
               
              <TableCell> {job?.company?.name} </TableCell>
              <TableCell> {job?.title} </TableCell>
              <TableCell> {job?.createdAt.split("T")[0]} </TableCell>
              <TableCell className="text-right cursor-pointer">
                <Popover>
                  <PopoverTrigger>
                    <MoreHorizontal />
                  </PopoverTrigger>
                  <PopoverContent className="w-32">

                    <div onClick= {()=> navigate(`/admin/companies/${job._id}`)}      className="flex items-center gap-2 w-fit">
                      <Edit2 className="w-4" />
                      <span>Edit</span>
                    </div>
                    <div onClick={()=>navigate(`/admin/jobs/${job._id}/applicants`)} className="flex items-center w-fit gap-2 cursor-pointer mt-2">
                      <Eye className="w-4"/>
                      <span>Applicants</span>
                    </div>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </tr>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminJobsTable;
