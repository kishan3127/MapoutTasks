import "./styles.css";

import Cogs from "./components/Cogs";
import Jobs from "./components/Jobs";

export default function App() {
  return (
    <div className="App">
      <h1 className="theme-color text-center">Assignment 1</h1>
      <hr />

      <Cogs />

      <h1 className="theme-color text-center">Assignment 2</h1>
      <hr />
      <Jobs />
    </div>
  );
}
