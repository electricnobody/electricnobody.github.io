import Navbar from "./Navbar";
import { useState } from "react";
import poems from './poems'

function getRandomPoem() {
  const titles = Object.keys(poems);
  const title = titles[Math.floor(Math.random() * titles.length)]
  return [title, poems[title]]
}

function App() {
  const [[title, poem], setPoem] = useState(getRandomPoem())

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Electric Nobody</h1>
      </header>
      <main>
        <h2>{title.replace(/_/g, "")}</h2>
        <pre>{poem}</pre>
      </main>
      <footer>
        <button onClick={() => setPoem(getRandomPoem())}>
          Get another poem
        </button>
      </footer>
    </div>
  );
}

export default App;
