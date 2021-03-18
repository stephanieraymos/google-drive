import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "./Navbar";
import AddFolderButton from "./AddFolderButton";
import { useFolder } from "../../Hooks/useFolder";
import Folder from "./Folder";

const Dashboard = () => {
  const { folder, childFolders } = useFolder("Ak7G16kr7kLO7L3HA27r");
  console.log(folder);

  return (
    <>
      <Navigation />
      <Container fluid>
        <AddFolderButton currentFolder={folder} />
        {childFolders.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFolders.map((childFolder) => {
              <div
                key={folder.id}
                style={{ maxWidth: "250px" }}
                className="p-2"
              >
                <Folder folder={childFolder} />
              </div>;
            })}
          </div>
        )}
      </Container>
    </>
  );
};

export default Dashboard;
