import styles from "./Navbar.module.css";

export function JobCard({job}) {
    return (
        <div className={styles.card}>
            <img src={ job.image} alt="job"/>
            <h3>Job: {job.title}</h3>
            <h3>Description: { job.description }</h3>
            <h3>Location: {job.location}</h3>
        </div>
    )
}