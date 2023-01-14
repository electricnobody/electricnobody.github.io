import Navbar from "./Navbar";
import { useState } from "react";
import poems from './poems'

function getRandomPoem() {
  return poems[Math.floor(Math.random() * poems.length)]
}

function App() {
  const [poem, setPoem] = useState(getRandomPoem())

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Electric Nobody</h1>
      </header>
      <main>
        <pre>{poem}</pre>
        {/* <Poem /> */}
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
