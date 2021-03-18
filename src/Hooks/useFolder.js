import firebase from "firebase";
import { useReducer, useEffect } from "react";
import { database } from "../firebase";
import { useAuth } from "../Context/AuthContext";

const ACTIONS = {
  SELECT_FOLDER: "select-folder",
  UPDATE_FOLDER: "update-folder",
  SET_CHILD_FOLDERS: "set-child-folders",
};

export const ROOT_FOLDER = {
  name: "Root",
  id: null,
  path: [],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.SELECT_FOLDER:
      return {
        folderId: payload.folderId,
        folder: payload.folder,
        childFiles: [],
        childFolders: [],
      };
    case ACTIONS.UPDATE_FOLDER:
      return {
        ...state,
        folder: payload.folder,
      };
    case ACTIONS.SET_CHILD_FOLDERS:
      return {
        ...state,
        childFolders: payload.childFolders,
      };

    default:
      return state;
  }
};

export function useFolder(folderId = null, folder = null) {
  const [state, dispatch] = useReducer(reducer, {
    folderId,
    folder,
    childFolders: [],
    childFiles: [],
  });

  const { currentUser } = useAuth();

  useEffect(() => {
    dispatch({ type: ACTIONS.SELECT_FOLDER, payload: { folderId, folder } }); //Reset folder details
  }, [folderId, folder]);

  useEffect(() => {
    if (folderId == null) {
      //Not in a folder (in root: Dashboard)
      return dispatch({
        type: ACTIONS.UPDATE_FOLDER,
        payload: { folder: ROOT_FOLDER },
      });
    }

    database.folders
      .doc(folderId)
      .get()
      .then((doc) => {
        dispatch({
          //If error getting current folder; get root instead
          type: ACTIONS.UPDATE_FOLDER,
          payload: { folder: database.formatDoc(doc) },
        });
        console.log(database.formatDoc(doc));
      })
      .catch((error) => {
        console.error(error);
        dispatch({
          //If error getting current folder; get root instead
          type: ACTIONS.UPDATE_FOLDER,
          payload: { folder: ROOT_FOLDER },
        });
      });
  }, [folderId]); //Updating folder vairable from folderId: anytime we pass a new id to the folder

  useEffect(() => {
    return database.folders
      .where("parentId", "==", folderId)
      .where("userId", "==", currentUser.uid)
      .orderBy("createdAt")
      .onSnapshot((snapshot) => {
        dispatch({
          type: ACTIONS.SET_CHILD_FOLDERS,
          payload: { childFolders: snapshot.docs.map(database.formatDoc) },
        });
      });
  }, [folderId, currentUser]);

  return state;
}
