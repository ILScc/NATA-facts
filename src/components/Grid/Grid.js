import React from "react";
import GridItem from "./GridItem";
import styles from "./Grid.module.css";

export default function Grid({ data, updateClicked }) {
    console.log(data);
    return (
        <section className={styles.grid}>
            {data.map(({ id, title, fact, clicked }) => (
                <GridItem
                    key={id}
                    id={id}
                    fact={fact}
                    title={title}
                    clicked={clicked}
                    updateClicked={updateClicked}
                />
            ))}
        </section>
    );
}
