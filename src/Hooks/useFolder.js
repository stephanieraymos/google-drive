import { useReducer } from "./react";

const reducer = () => {

 }
export function useFolder(folderId = null, folder = null) {
  const [state, dispatch] = useReducer(reducer, {
      folderId,
      folder,
      childFolder: [],
      childFiles: []
  });

}
