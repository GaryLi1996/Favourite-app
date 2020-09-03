import React, { useState } from "react";
import DeleteLink from "./deleteLink";
import "./border.css";

/**
 * Creates the border for the hyperlink
 * @param {Component} props
 */
const BorderBox = (props) => {
  const [isHovering, setHovering] = useState(false);

  const onMouseEnter = () => {
    setHovering(true);
  };

  const onMouseLeave = () => {
    setHovering(false);
  };

  return (
    <div
      className="border"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {props.children}
      <DeleteLink
        className="del"
        onDelete={props.handleDelete}
        isHovering={isHovering}
        link={props.link}
      />
    </div>
  );
};

export default BorderBox;
