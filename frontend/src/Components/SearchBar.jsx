import axios from "axios";
import { useState } from "react";
import styles from "./Navbar.module.css";

export function SearchBar({ setJobs }) {
    const [key, setKey] = useState("");
    const handleSearch = () => {
        axios.get(`http://localhost:2576/jobs?title=${key}`)
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
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}