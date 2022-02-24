import styles from "./App.module.css";
import Background from "./components/Background/Background";
import Grid from "./components/Grid/Grid";
import Rocket from "./components/Rocket/Rocket";
import Smoke from "./components/Rocket/Smoke";
import Title from "./components/Title/Title";

function App() {
    return (
        <div className={styles.App}>
            <Title />
            <Background />
            <Grid />
            <Rocket />
            <Smoke />
        </div>
    );
}

export default App;
