import axios from "axios";
import { useState } from "react";
import styles from "./Navbar.module.css";

export function SearchBar({ setJobs }) {
    const [key, setKey] = useState("");
    const [location, setLocation] = useState("");

    const handleSearch = () => {
        axios.get(`http://localhost:2576/jobs?title=${key}&location=${location}`)
            .then((res) => {
                setJobs(res.data.jobs);
            })
            .catch((err) => {
                alert(err);
            })
    }
     return (
        <div className={styles.searchBar}>
             <input onChange={(e) => setKey(e.target.value)} placeholder="Search for jobs" />
             <select onChange={(e) => setLocation(e.target.value)}>
                 <option value="">All</option>
                 <option value="Berlin, Germany">Berlin, Germany</option>
                 <option value="Paris">Paris</option>
                 <option value="Beijing">Beiging</option>
             </select>
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}