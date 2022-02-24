import styles from "./Smoke.module.css";
export default function Smoke() {
    return (
        <div className={styles.smoke}>
            <video className={styles.video} autoPlay loop src="/smoke.mov" />
        </div>
    );
}
