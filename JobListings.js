import React, { useEffect, useState } from "react";
import axios from "axios";

function JobListings({ history }) {
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://jobs.github.com/positions.json?description=${programmingLanguage}`);
        setJobListings(response.data);
      } catch (error) {
        console.error("Error fetching job listings: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      {jobListings.map((job) => (
        <div key={job.id} className="job-listing">
          <h3>{job.title}</h3>
          <p>{job.company}</p>
          <p>Location: {job.location}</p>
          <button onClick={() => history.push(`/job-details/${job.id}`)}>View Details</button>
        </div>
      ))}
    </div>
  );
}

export default JobListings;
