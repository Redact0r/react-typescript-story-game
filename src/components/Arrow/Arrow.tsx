import React, { FC } from "react";
import "./Arrow.css";

interface ArrowProps {
  direction: string;
  handleClick: (event: React.MouseEvent<HTMLDivElement>, id: string) => void;
}

const Arrow: FC<ArrowProps> = (props: ArrowProps) => {
  return (
    <div
      className="arrowBtn"
      id={props.direction === "prev" ? "back" : "fwd"}
      onClick={(e) => props.handleClick(e, (e.target as HTMLDivElement).id)}
    >
      {props.direction === "prev" ? "🡸" : "🡺"}
    </div>
  );
};

export default Arrow;
