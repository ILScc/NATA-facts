import React from "react";
import GridItem from "./GridItem";
import styles from "./Grid.module.css";

export default function Grid({ data }) {
    return (
        <section className={styles.grid}>
            {data.map(({ id, title, fact }) => (
                <GridItem key={id} fact={fact} title={title} />
            ))}
        </section>
    );
}
