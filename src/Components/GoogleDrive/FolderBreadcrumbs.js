import React from "react";
import { Breadcrumb } from "react-bootstrap";

const FolderBreadcrumbs = ({ currentFolder }) => {
  return (
    <Breadcrumb listProps={{ className: "bg-white p-0" }}>
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
