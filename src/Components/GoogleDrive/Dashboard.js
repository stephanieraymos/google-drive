import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "./Navbar";
import AddFolderButton from "./AddFolderButton";
import { useFolder } from "../../Hooks/useFolder"

const Dashboard = () => {

  const state = useFolder();
  console.log(state);

  return (
    <>
      <Navigation />
      <Container fluid>
        <AddFolderButton />
      </Container>
    </>
  );
};

export default Dashboard;
