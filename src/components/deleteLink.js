import React from "react";
import "./border.css";
import DeleteIcon from "@material-ui/icons/Delete";

/**
 * When hover over the component a trash can icon will appear and
 * you can choose to delete that component
 */
const deleteButton = (props) => {
  if (props.isHovering) {
    return (
      <button
        className="btn btn-outline-danger btn-sm setting"
        onClick={() => {
          console.log(props);
          props.onDelete(props.link);
        }}
      >
        <DeleteIcon />
      </button>
    );
  } else {
    return null;
  }
};

export default deleteButton;
