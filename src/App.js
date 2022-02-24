import styles from "./App.module.css";
import Background from "./components/Background/Background";
import Grid from "./components/Grid/Grid";
import Rocket from "./components/Rocket/Rocket";
import Smoke from "./components/Rocket/Smoke";
import Title from "./components/Title/Title";
import data from "./data/NASA_facts.json";
function App() {
    return (
        <div className={styles.App}>
            <Title />
            <Background />
            <Grid data={data} />
            <Rocket />
            <Smoke />
        </div>
    );
}

export default App;
