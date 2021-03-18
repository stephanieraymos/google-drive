import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "./Navbar";
import AddFolderButton from "./AddFolderButton";
import { useFolder } from "../../Hooks/useFolder";
import Folder from "./Folder";

const Dashboard = () => {
  const { folder } = useFolder("Ak7G16kr7kLO7L3HA27r");
  console.log(folder);

  return (
    <>
      <Navigation />
      <Container fluid>
        <AddFolderButton currentFolder={folder} />
        {folder && <Folder folder={folder} />}
      </Container>
    </>
  );
};

export default Dashboard;
