import Poem from "./Poem";
import poems from './poems'
import { useState } from "react";

function getRandomPoem() {
  const titles = Object.keys(poems);
  const title = titles[Math.floor(Math.random() * titles.length)]
  return [title, poems[title]]
}

function App() {
  const [[title, poem], setPoem] = useState(getRandomPoem())

  return (
    <div>
      <main>
        <Poem title={title} poem={poem} />
        <div className="row">
          <button className="btn btn-primary" onClick={() => setPoem(getRandomPoem())}>
            Get another poem
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
