import React, { useState } from "react";
export default Stopwatch;

function Stopwatch() {
  const [second, setSecond] = useState(null);

  const [intervalid, setintervalId] = useState(null);

  const [stage, setStage] = useState("reset");
  //clock elelment
  const clock = (
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
    <button type="button" onClick={handlestart}>
      Start
    </button>
  );

  //pause element
  let resume = (
    <button type="button" onClick={handlestart}>
      Resume
    </button>
  );

  //reset element
  let reset = (
    <button type="button" onClick={handlereset}>
      Reset
    </button>
  );
  let pause = (
    <button type="button" onClick={handlepause}>
      Pause
    </button>
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
          <div>
            <h6>STOPWATCH</h6>
            {clock}

            {start}
          </div>
        );
      }
    }
  }
}
