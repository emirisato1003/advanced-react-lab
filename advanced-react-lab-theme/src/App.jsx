import React, { createContext, useState } from "react";
import Header from "./Header";
import Button from "./Button";

const ThemeContext = createContext();

export default function App() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`container ${theme}-theme`}>
        <Header />
        <Button />
      </div>
    </ThemeContext.Provider>
  );
}

export { ThemeContext };
