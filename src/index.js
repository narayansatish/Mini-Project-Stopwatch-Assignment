import React from "react";
import ReactDOM from "react-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Image,
  Row,
  Col,
} from "react-bootstrap";
import Stopwatch from "./component/watch";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Stopwatch />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
