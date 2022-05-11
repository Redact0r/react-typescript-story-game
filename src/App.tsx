import React from "react";
import Arrow from "./components/Arrow/Arrow";
import "./App.css";
import StoryWindow from "./components/StoryWindow/StoryWindow";

function App() {
  const handlePrevNextClick = (
    e: React.MouseEvent<HTMLDivElement>,
    backOrFwdString: string
  ) => {
    // if (backOrFwdString === "back") {
    // }
    // if (backOrFwdString === "fwd") {
    // }
    e.preventDefault();
    console.log(backOrFwdString);
  };

  return (
    <div className="App">
      <Arrow
        direction="prev"
        handleClick={(e) =>
          handlePrevNextClick(e, (e.target as HTMLDivElement).id)
        }
      />
      <StoryWindow
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis purus elit. In id nibh quis felis porttitor placerat. Nam dignissim dui ac lobortis lobortis. Ut in justo fermentum, pharetra erat sed, imperdiet justo. Nam commodo arcu vitae libero pharetra blandit. Phasellus mollis metus dui, nec elementum magna egestas eu. In dictum, ante et laoreet dapibus, turpis turpis feugiat metus, nec dignissim sapien nulla vitae sapien. Vivamus feugiat dignissim augue, et vestibulum diam tempor vitae. Quisque eu vestibulum felis, non sollicitudin mauris. Aenean ornare nec velit sit amet feugiat. Ut lorem nisi, volutpat vel iaculis vel, iaculis non sapien. Nam at tellus mollis, commodo justo quis, pulvinar lorem. Mauris quis nibh finibus, efficitur nisl ut, pellentesque enim. Morbi sed eros ex. Maecenas consequat ex non mollis pretium."
        }
      ></StoryWindow>
      <Arrow
        direction="next"
        handleClick={(e) =>
          handlePrevNextClick(e, (e.target as HTMLDivElement).id)
        }
      />
    </div>
  );
}

export default App;
