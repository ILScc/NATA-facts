import React from "react";
import GridItem from "./GridItem";
import styles from "./Grid.module.css";
import mediaStyles from "./Media.module.css";
import cx from "classnames";

export default function Grid({ data, updateClicked }) {
    return (
        <section className={cx(styles.grid, mediaStyles.grid)}>
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
