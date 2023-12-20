import { useState } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Countries from "./Countries";
import NotFound from "./NotFound";
import { Link, NavLink } from "react-router-dom";
import Country from "./Country";
import LangContext from "./LangContext";
function App() {
  const [lang, setLang] = useState("en-US");

  const trad = {
    "en-US": { Home: "Home", About: "About US", countries: "Countries" },
    "it-IT": {
      Home: "Pagina Iniziale",
      About: "Chi Siamo",
      countries: "Paesi",
    },
  };

  return (
    <>
      <nav>
        <menu>
          <ul>
            <li>
              {" "}
              <NavLink className="link" to={"/"}>
                {trad[lang].Home}
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to={"/About"}>
                {trad[lang].About}
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to={"/Countries"}>
                {trad[lang].countries}
              </NavLink>
            </li>
          </ul>
          <select onChange={(e) => setLang(e.target.value)}>
            <option value="en-US">ENG</option>
            <option value="it-IT">ITA</option>
          </select>
        </menu>
      </nav>
      <LangContext.Provider value={lang}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Countries" element={<Countries />} />
          <Route path="/Country">
            <Route index element={<Country />} />
            <Route path=":code" element={<Country />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LangContext.Provider>
    </>
  );
}

export default App;
