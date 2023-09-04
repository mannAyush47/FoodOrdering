import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  console.log(err);
  return (
    <div >
      React-router-dom error
      <h1>{err.status}</h1>
    </div>
  );
};

export default Error;
