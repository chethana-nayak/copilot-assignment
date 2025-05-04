import React from "react";

import { CONSTANTS } from "../constants";

const NotFound = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      fontSize: "32px",
    }}
  >
    <h1>{CONSTANTS.error.page}</h1>
    <p>{CONSTANTS.notFound.page}</p>
  </div>
);

export default NotFound;
