// src/components/JobList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobList = () => {
  const [jobs, setJobs] = useState([]);




  useEffect(() => {
    const fetchJobs = async () => {
      const response = await axios.get('http://localhost:5001/api/job-listings');
      setJobs(response.data);
    };
    fetchJobs();
  }, []);

  return (
    <div>
      <h2>Job Listings</h2>
      <ul>
        {jobs.map(job => (
          <li key={job._id}>{job.title} - {job.location}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
