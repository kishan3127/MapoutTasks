import { useState, useEffect } from "react";

import { CardSwiper } from "react-card-rotate-swiper";

import axios from "axios";
import JobCard from "./jobCard";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedJobs, setSelectedJobs] = useState(
    JSON.parse(localStorage.getItem("jobSelected")) || []
  );
  useEffect(() => {
    getTheJobs();

    // to remove the existing values
    localStorage.removeItem("jobRejected");
    localStorage.removeItem("jobSelected");
  }, []);

  function getTheJobs() {
    const url =
      "https://mapout.com/mapout-node/joblist/muse-jobs?keyword=Frontend&location=";
    axios.get(url).then((data) => {
      setJobs(data?.data?.jobs);
      setLoading(false);
    });
  }

  const storeToLocal = (key, title) => {
    let existingEntries = JSON.parse(localStorage.getItem(key));
    if (existingEntries == null) existingEntries = [];

    existingEntries.push(title);
    localStorage.setItem(key, JSON.stringify(existingEntries));

    if (key === "jobSelected") {
      setSelectedJobs(existingEntries);
    }
  };

  const handleSwipe = (direction, job, index) => {
    //remove the node
    setJobs(jobs.filter((_, i) => i !== index));
    //set it to the local storage
    if (direction === "left") {
      storeToLocal("jobRejected", job.title);
    }
    if (direction === "right") {
      storeToLocal("jobSelected", job.title);
    }
  };
  return (
    <>
      {jobs.length > 0 ? (
        <div className="parent-wrapper jobs">
          {jobs?.map((job, index) => {
            return (
              <CardSwiper
                key={index}
                onSwipe={(e) => handleSwipe(e, job, index)}
                className={"card-swiper"}
                contents={<JobCard job={job} />}
              />
            );
          })}
        </div>
      ) : loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <p className="text-center">No More Results</p>
      )}

      {selectedJobs.length > 0 && (
        <div className="applyForJobs">
          <hr />
          You have selected these jobs : Apply now
          <ul className="styled-list listOfSelectedJobs">
            {selectedJobs.map((name) => {
              // As url is not provided in the api, putting # for now.
              return (
                <li>
                  <a href="#">{name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
export default Jobs;
