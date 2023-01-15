import Poem from "./Poem";
import poems from './poems'
import { useState } from "react";

function getRandomPoem() {
  const titles = Object.keys(poems);
  const title = titles[Math.floor(Math.random() * titles.length)]
  return [title, poems[title]]
}

function scrollToTop() {
  document.body.scrollTop = 0; document.documentElement.scrollTop = 0;
}


function App() {
  const [[title, poem], setPoem] = useState(getRandomPoem())

  function handleButtonClick() {
    setPoem(getRandomPoem())
    scrollToTop()
  }

  return (
    <div>
      <main>
        <Poem title={title} poem={poem} />
        <div className="row">
          <button className="btn btn-primary" onClick={handleButtonClick}>
            Get another poem
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
