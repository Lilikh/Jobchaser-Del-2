
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import JobCard from "./Components/JobCard";
/* import jobData from "./DataJob"; */
import {useState,useEffect } from "react";
import { collection, query,orderBy ,where,getDocs } from "firebase/firestore";
import { db } from "./firebase.config";



function App() {
  const[jobs, setJobs]=useState([]);
  const[customSearch, setCustomSearch]= useState(false);


  const fetchJobs= async()=>{
    setCustomSearch(false);
    const tempJobs= [];
    const jobsRef= query(collection(db,"Jobs"));
    const q = query(jobsRef, orderBy("postedOn", "desc"));

    const req = await getDocs(q);
    req.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id:job.id,
        postedOn:job.data().postedOn.toDate()
      })
      
  /*     console.log(doc.id, " => ", doc.data()); */
    });
    setJobs(tempJobs);
  }
  const fetchJobsCustom = async(jobCriteria)=>{
    setCustomSearch(true);
    const tempJobs= [];
    const jobsRef= query(collection(db,"Jobs"));
    const q = query(jobsRef,where("type", "==", jobCriteria.type) ,where("title", "==", jobCriteria.title) ,where("location", "==", jobCriteria.location) ,where("experience", "==", jobCriteria.experience) ,orderBy("postedOn", "desc"));

    const req = await getDocs(q);
    req.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id:job.id,
        postedOn:job.data().postedOn.toDate()
      })
      
  /*     console.log(doc.id, " => ", doc.data()); */
    });
    setJobs(tempJobs);
  }

 
  useEffect(()=>{
    fetchJobs()
  },[])
 

  return (
    <>
      <div>
         <Navbar />
      <Header />
      <SearchBar fetchJobChaser={fetchJobsCustom}/>
      {customSearch && 
        <button onClick={fetchJobs} className="flex pl-[1250px] mb-2">
          <p className="bg-blue-500 px-10 py-2 rounded-md text-white">Clear Filters</p>
        </button>
      }
      {jobs.map((job)=> (
        <JobCard key={job.id} {...job}/>
      ))}
        
      
      </div>
     
    </>
  )
}

export default App
