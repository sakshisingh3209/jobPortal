import { setAllJobs } from '@/redux/jobSlice'
import { JOB_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import  { useEffect } from 'react'

const useGetAllJobs=()=>{
    useEffect(()=>{
        const fetchAllJobs=async()=>{
            try{
             const res= await axios.get(`${JOB_API_END_POINT}/get`,{
                withCredentials:true
             });
             if(res.data.success){
                dispatchEvent(setAllJobs(res.data.jobs));
             }
            }catch(error){
                console.log(error);
            }
        }
        fetchAllJobs();
    },[])
}

export default useGetAllJobs