import { useContext } from "react";
import "./About.scss";
import LangContext from "./LangContext";
export default () => {
  const lang = useContext(LangContext);
  const trad = {
    "en-US": {
      title: "About US",
      descrizione: "Questo dovrebbe essere in inglese",
    },
    "it-IT": {
      title: " Chi Siamo",
      descrizione: ` Siamo degli studenti del Professor Hyur Scrizzi che ci ha costretto a
      fare questo sito come esercizio`,
    },
  };
  return (
    <>
      <h1>{trad[lang].title}</h1>
      <div className="p-about">
        <p>{trad[lang].descrizione}</p>
      </div>
    </>
  );
};
