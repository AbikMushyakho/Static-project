import React from "react";

const center = () => {
  return (
    <>
      <h1>
        Creativity is to think more{" "}
        <b style={{ color: "rgb(230, 88, 88)" }}>efficiently</b>
      </h1>
      <h4>
        So when a good idea comes, you know, part of my job is to move it
        around, just see what different people think, get people talking about
        it.
      </h4>
      <div className="inputButton">
        <input type="text" placeholder="Email address" />
        <button>Get Updates</button>
      </div>
    </>
  );
};

export default center;
