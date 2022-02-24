import React from "react";
import styles from "./GridItem.module.css";

export default function GridItem({fact, title }) {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            <article className={styles.fact}>{fact}</article>
        </div>
    );
}
