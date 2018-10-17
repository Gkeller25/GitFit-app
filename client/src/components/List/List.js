import React from "react";
import "./List.css";

export const List =  (props, {children})  => {
  return (
    <div className="list-overflow-container">
    {props.category}
      <ul className="list-group">
        {children}
      </ul>
    </div>
  );
};
