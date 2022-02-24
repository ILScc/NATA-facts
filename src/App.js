import styles from "./App.module.css";
import { useState } from "react";
import Background from "./components/Background/Background";
import Grid from "./components/Grid/Grid";
import Rocket from "./components/Rocket/Rocket";
import Smoke from "./components/Rocket/Smoke";
import Title from "./components/Title/Title";
import Data from "./data/NASA_facts.json";
function App() {
    const [data, setData] = useState(Data);
    const updateClicked = (id) => {
        const newData = data.map((item) =>
            item.id === id ? { ...item, clicked: !item.clicked } : item
        );
        setData(newData);
    };
    return (
        <div className={styles.App}>
            <Title />
            <Background />
            <Grid data={data} updateClicked={updateClicked} />
            <Rocket />
            <Smoke />
        </div>
    );
}

export default App;
