import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "./Navbar";
import AddFolderButton from "./AddFolderButton";
import { useFolder } from "../../Hooks/useFolder";

const Dashboard = () => {
  const { folder } = useFolder();
  console.log(folder);

  return (
    <>
      <Navigation />
      <Container fluid>
        <AddFolderButton currentFolder={folder} />
      </Container>
    </>
  );
};

export default Dashboard;
