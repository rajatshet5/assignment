import axios from "axios";
import { useEffect, useState } from "react";
import { JobCard } from "./JobCard";
import styles from "./Navbar.module.css";
import { SearchBar } from "./SearchBar";

export function Home() {
    const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:2576/jobs")
      .then((res) => {
        setJobs(res.data.jobs);
      })
      .catch((err) => {
        alert(err);
      })
  }, []);
    return (
        <div>
            <SearchBar setJobs={setJobs}/>
            <div className={styles.cardCont}>
            {jobs.map((item, e) => 
            <JobCard key={e} job={item} />
            )}
        </div>
        </div>
    )
}