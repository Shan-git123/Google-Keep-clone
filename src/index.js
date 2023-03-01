import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./keep.css";
import Keep from "./Keep";

ReactDOM.render(
   <BrowserRouter>
    <Keep />
   </BrowserRouter>
  ,
  document.getElementById("root")
);

