import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Navigation from "./components/Navegation";
import CreateNote from "./components/CreateNote";
import CreateUser from "./components/CreateUser";
import NoteList from "./components/NoteList";
import Navbar from "./components/Navbar.js";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Navigation />
      <Header />
      <Route path="/" component={NoteList} />
      <Route path="/notas" exact component={CreateNote} />
      <Route path="/usuario" component={CreateUser} />
    </Router>
  );
}

export default App;
