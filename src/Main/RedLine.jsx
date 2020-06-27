import React from "react";
import moment from "moment";

let hour = +moment().format("HH");
let minute = +moment().format("mm");
let margin = hour * 60 + minute;

const Redline = () => {
  return (
    <div className="redline" style={{ marginTop: `${margin}px` }} />
  );
};

export default Redline;