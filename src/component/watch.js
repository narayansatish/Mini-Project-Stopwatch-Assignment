import React, { useState } from "react";
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
export default Stopwatch;


function Stopwatch() {
  const [second, setSecond] = useState(null);

  const [intervalid, setintervalId] = useState(null);

  const [stage, setStage] = useState("reset");
  //clock elelment
  const clock = (
    <>
      <p>
        {(
          "0" +
          (second -
            (second % 60) -
            (+((second - (second % 60)) / 60) % 60) * 60) /
          3600
        ).slice(-2)}
      ::{("0" + (((second - (second % 60)) / 60) % 60)).slice(-2)}::
      {("0" + (second % 60)).slice(-2)}
      </p>
      <p>HH::MM::SS</p>
    </>
  );
  //function which will handle start event
  let handlestart = () => {
    setStage("start");

    let id = setInterval(() => setSecond((second) => second + 1), 1000); //we are passing so that it does not take stale value

    setintervalId(id);
  };
  //this function will handle pause event
  let handlepause = () => {
    clearInterval(intervalid);

    setStage("pause");
  };
  //this function will handle reset event
  let handlereset = () => {
    clearInterval(intervalid);

    setSecond(0);

    setStage("reset");
  };
  //start element
  let start = (
    <Button variant="primary" style={{ backgroundColor: "#ff00bf", fontSize: "2.3rem" }} onClick={handlestart}>
      Start
    </Button>
  );

  //pause element
  let resume = (
    <Button className="btn btn-info" style={{ backgroundColor: "green", fontSize: "2.5rem" }} onClick={handlestart}>
      Resume
    </Button>
  );

  //reset element
  let reset = (
    <Button className="btn btn-danger" style={{ backgroundColor: "red", fontSize: "2.5rem", rightMargin: "5" }} onClick={handlereset}>
      Reset
    </Button>
  );
  let pause = (
    <Button className="btn btn-primary" style={{ backgroundColor: "", fontSize: "2.5rem" }} onClick={handlepause}>
      Pause
    </Button>
  );
  if (stage == "start") {
    return (
      <div>
        <h6>STOPWATCH</h6>
        {clock}

        {reset}

        {pause}
      </div>
    );
  } else {
    if (stage == "pause") {
      return (
        <div>
          <h6>STOPWATCH</h6>
          {clock}

          {reset}

          {resume}
        </div>
      );
    } else {
      if (stage == "reset") {
        return (
          <div className="container">
            <h6>STOPWATCH</h6>
            {clock}

            {start}
          </div>
        );
      }
    }
  }
}
