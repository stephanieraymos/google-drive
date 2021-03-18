import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";

const AddFileButton = ({ currentFolder }) => {
  const handleUpload = (e) => {};

  return (
    <label className="btn btn-outline-success btn-sm m-0 mr-2">
      <FontAwesomeIcon icon={faFileUpload} />
      <input
        type="file"
        onChange={handleUpload}
        style={{ opacity: 0, position: "absolute", left: "-9999px" }}
      ></input>
    </label>
  );
};

export default AddFileButton;
