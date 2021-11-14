import styles from "./Navbar.module.css";
import { SearchBar } from "./SearchBar";

export function Navbar() {
    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <div>
                    <div>JobHunt</div>
                    <div>Find Job</div>
                    <div>Upskill yourself</div>
                    <div>Post a job</div>
                    <div>Signin</div>
                </div>
                <div className={styles.headings}>
                    <h1>Find your dream job</h1>
                    <h3>Browse through thousands of full-time ot part-time jobs near you</h3>
                </div>
            </div>
                <SearchBar/>
            

        </div>
    )
}