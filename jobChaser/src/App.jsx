
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import JobCard from "./Components/JobCard";
import jobData from "./DataJob";
import { useState, useEffect } from "react";





function App() {
  const [jobs, setJobs] = useState([]);
  const [customSearch, setCustomSearch] = useState(false);

  const fetchJobs = () => {
    setCustomSearch(false);
    setJobs(jobData);
  };

  const fetchJobsCustom = (jobCriteria) => {
    setCustomSearch(true);
    const filteredJobs = jobData.filter((job) => 
      (!jobCriteria.type || job.type === jobCriteria.type) &&
      (!jobCriteria.title || job.title === jobCriteria.title) &&
      (!jobCriteria.location || job.location === jobCriteria.location) &&
      (!jobCriteria.experience || job.experience === jobCriteria.experience)
    );
    setJobs(filteredJobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <Header />
        <SearchBar fetchJobChaser={fetchJobsCustom} />
        {customSearch && 
          <button onClick={fetchJobs} className="flex pl-[1250px] mb-2">
            <p className="bg-blue-500 px-10 py-2 rounded-md text-white">Clear Filters</p>
          </button>
        }
        {jobs.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>
    </>
  );
}

export default App;
