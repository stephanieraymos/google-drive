import React from "react";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const File = ({ file }) => {
  return (
    <a
      href={file.url}
      target="_blank" rel="noopener noreferrer"
      className="btn btn-outline-dark text-truncate w-100"
    >
      <FontAwesomeIcon icon={faFile} className="mr-2" />
      {file.name}
    </a>
    // @todo Create functionality to delete files
    // @todo Create functionality to move files to other folders
  );
};

export default File;
