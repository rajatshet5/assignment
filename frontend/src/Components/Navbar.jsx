// import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { SearchBar } from "./SearchBar";

export function Navbar() {
    // const a = useLocation();
    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <div>
                    <Link to="/"><div>Home</div></Link>
                    <div>JobHunt</div>
                    <div>Find Job</div>
                    <div>Upskill yourself</div>
                    <Link to="/post"><div >Post a job</div></Link>
                    <div>Signin</div>
                </div>
                <div className={styles.headings}>
                    <h1>Find your dream job</h1>
                    <h3>Browse through thousands of full-time ot part-time jobs near you</h3>
                </div>
            </div>
        </div>
    )
}