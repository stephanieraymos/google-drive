import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../Context/AuthContext";
import { storage } from "../../firebase";

const AddFileButton = ({ currentFolder }) => {
  const { currentUser } = useAuth();

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (currentFolder == null || file == null) return;

    const filePath =
      currentFolder.path.length > 0
        ? //If there's a path: put it at beginning of file
          `${currentFolder.path.join("/")}/${file.name}`
        : //Otherwise just put file name as path
          file.name;

    //Saving upload task to: Root folder called files, new folder for individual user + file path
    const uploadTask = storage
      .ref(`/files/${currentUser.uid}/${filePath}`)
      .put(file); //Put file inside of this location
  };

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
