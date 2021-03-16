import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "./Navbar";
import AddFolderButton from "./AddFolderButton";

const Dashboard = () => {
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
