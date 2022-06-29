import React, { FC } from "react";
import "./StoryWindow.css";

import { story } from "../../assets/data/storyData/story";

interface StoryWindowProps {
  currentScene: number;
}

const StoryWindow: FC<StoryWindowProps> = (props: StoryWindowProps) => {
  return (
    <div className="storyWindow">{story[props.currentScene].textBody}</div>
  );
};

export default StoryWindow;
