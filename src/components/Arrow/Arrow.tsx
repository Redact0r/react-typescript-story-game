import React, { FC } from "react";
import "./Arrow.css";

interface ArrowProps {
  direction: string;
  handleClick: (e: React.MouseEvent<HTMLDivElement>, id: string) => void;
  disabled: boolean;
}

const Arrow: FC<ArrowProps> = (props: ArrowProps) => {
  return (
    <div
      className={`arrowBtnContainer ${props.disabled ? "disabledArrow" : null}`}
    >
      <div
        className="arrowBtn"
        id={props.direction === "prev" ? "back" : "fwd"}
        onClick={(e) => props.handleClick(e, (e.target as HTMLDivElement).id)}
      >
        {props.direction === "prev" ? "🡸" : "🡺"}
      </div>
    </div>
  );
};

export default Arrow;
