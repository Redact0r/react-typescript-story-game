import React, { FC } from "react";
import "./StoryWindow.css";

interface StoryWindowProps {
  text: string;
}

const StoryWindow: FC<StoryWindowProps> = (props: StoryWindowProps) => {
  return <div className="storyWindow">{props.text}</div>;
};

export default StoryWindow;
