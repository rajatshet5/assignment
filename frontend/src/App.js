import { useEffect, useState } from 'react';
import './App.css';
import { Navbar } from './Components/Navbar';
import axios from "axios";
import { JobCard } from './Components/JobCard';
import styles from "./Components/Navbar.module.css"

function App() {
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
    <div className="App">
      <Navbar />
      <div className={styles.cardCont}>
        {jobs.map((item) => 
          <JobCard job={item} />
        )}
      </div>
    </div>
  );
}

export default App;
