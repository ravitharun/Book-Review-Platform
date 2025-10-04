import React from "react";
import { useNavigate } from "react-router-dom";

function NavigateRoute({ url }) {
  const navigate = useNavigate();
  console.log(url);
  navigate(url);
  return <div></div>;
}

export default NavigateRoute;
