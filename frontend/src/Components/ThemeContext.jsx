import React, { useContext } from "react";
import SetTheme from "./Theme";

function ThemeContext() {
  const GetTheme = useContext(SetTheme);
  console.log(GetTheme, "GetTheme");
  return <div></div>;
}

export default ThemeContext;
