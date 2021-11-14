import styles from "./Navbar.module.css";

export function SearchBar() {
    return (
        <div className={styles.searchBar}>
            <input placeholder="Search for jobs"/>

        </div>
    )
}