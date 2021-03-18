import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";

const Folder = ({ folder }) => {
  return (
    <Link>
      <FontAwesomeIcon icon={faFolder} className="mr-2" />
      {folder.name}
    </Link>
  );
};

export default Folder;
