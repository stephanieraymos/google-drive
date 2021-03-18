import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ROOT_FOLDER } from "../../Hooks/useFolder";

const FolderBreadcrumbs = ({ currentFolder }) => {
  let path = currentFolder === ROOT_FOLDER ? [] : [ROOT_FOLDER];
  if (currentFolder) path = [...path, ...currentFolder.path];

  return (
    <Breadcrumb
      className="flex-grow-1"
      listProps={{ className: "bg-white pl-0 m-0" }}
    >
      {path.map((folder, index) => (
        <Breadcrumb.Item
          key={folder.id}
          linkAs={Link}
          linkProps={{
            to: {
              pathname: folder.id ? `/folder/${folder.id}` : "/",
              //   Passing state along with route. Current folder doesn't contain path info.
              //   Path.slice is taking everything from 1st element in array up to the current index, which is root clicked on.
              //   Only getting elements in path associated with the folder clicked on.
              state: { folder: { ...folder, path: path.slice(1, index) } },
            },
          }}
          className="text-truncate d-inline-block"
          style={{ maxWidth: "150px" }}
        >
          {folder.name}
        </Breadcrumb.Item>
      ))}
      {currentFolder && (
        <Breadcrumb.Item
          className="text-truncate d-inline-block"
          style={{ maxWidth: "200px" }}
          active
        >
          {currentFolder.name}
        </Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
};

export default FolderBreadcrumbs;
