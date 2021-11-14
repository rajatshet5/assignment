import styles from "./Navbar.module.css";

export function JobCard({job}) {
    return (
        <div className={styles.card}>
            <h3>{job.title}</h3>

        </div>
    )
}