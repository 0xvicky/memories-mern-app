import React from "react";
import {Container} from "@material-ui/core";
import {Home, Auth, Navbar} from "./components";
import {Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <Container maxWidth='lg'>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/auth'
          element={<Auth />}
        />
      </Routes>
    </Container>
  );
};

export default App;
