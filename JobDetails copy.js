import React, { useEffect, useState } from "react";
import axios from "axios";

function JobDetails({ match }) {
  const jobId = match.params.id;
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://jobs.github.com/positions/${jobId}.json`);
        setJob(response.data);
      } catch (error) {
        console.error("Error fetching job details: ", error);
      }
    };

    fetchData();
  }, [jobId]);

  return (
    <div>
      {job && (
        <div>
          <h2>{job.title}</h2>
          <p>{job.company}</p>
          <p>{job.location}</p>
          <p dangerouslySetInnerHTML={{ __html: job.description }} />
          <button onClick={() => history.push("/apply")}>Apply</button>
        </div>
      )}
    </div>
  );
}

export default JobDetails;
