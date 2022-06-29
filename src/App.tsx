import React from "react";
import Arrow from "./components/Arrow/Arrow";
import "./App.css";
import StoryWindow from "./components/StoryWindow/StoryWindow";

const App = () => {
  let currentScene = 0;
  const handlePrevNextClick = (
    e: React.MouseEvent<HTMLDivElement>,
    backOrFwdString: string
  ) => {
    if (backOrFwdString === "back") {
      currentScene--;
    }
    if (backOrFwdString === "fwd") {
      currentScene++;
    }
    e.preventDefault();
    console.log(currentScene);
  };

  return (
    <div className="App">
      <Arrow
        direction="prev"
        handleClick={(e) =>
          handlePrevNextClick(e, (e.target as HTMLDivElement).id)
        }
        disabled={currentScene === 0 ? true : false}
      />
      <StoryWindow currentScene={currentScene}></StoryWindow>
      <Arrow
        direction="next"
        handleClick={(e) =>
          handlePrevNextClick(e, (e.target as HTMLDivElement).id)
        }
        disabled={false}
      />
    </div>
  );
};

export default App;
