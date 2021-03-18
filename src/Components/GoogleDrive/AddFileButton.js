import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../Context/AuthContext";
import { storage, database } from "../../firebase";
import { ROOT_FOLDER } from "../../Hooks/useFolder";

const AddFileButton = ({ currentFolder }) => {
  const { currentUser } = useAuth();

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (currentFolder == null || file == null) return;

    const filePath =
      currentFolder === ROOT_FOLDER //If in root folder
        ? `${currentFolder.path.join("/")}/${file.name}` //set path to current folder / name of file (ignore the folders name)
        : `${currentFolder.path.join("/")}/${currentFolder.name}/${file.name}`; //Otherwise set path to current folder / current folder name / name of file

    //Saving upload task to: Root folder called files, new folder for individual user + file path
    const uploadTask = storage
      .ref(`/files/${currentUser.uid}/${filePath}`)
      .put(file) //Put file inside of this location

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      () => {},
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          database.files.add({
            url: url,
            name: file.name,
            createdAt: database.getCurrentTimeStamp(),
            folderId: currentFolder.id,
            userId: currentUser.uid,
          });
        });
      }
    );
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