import styles from "./Rocket.module.css";
export default function Rocket() {
    return (
        <div>
            <img src="/shuttle.png" alt="Shuttle" className={styles.rocket} />
        </div>
    );
}
