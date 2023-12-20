import { useEffect } from "react";
import { useState } from "react";
import "./Countries.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import LangContext from "./LangContext";

export default () => {
  const [countries, setcountries] = useState([]);
  const [error, setError] = useState();
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((response) => response.json())
      .then((obj) => {
        setcountries(obj);
        console.log(obj);
      })
      .catch((error) => {
        setError("Sembra ci sia un errore. Prova di nuovo!");
        console.log(error);
      });
  }, []);

  const lang = useContext(LangContext);

  const trad = {
    "en-US": { title: "Countries" },
    "it-IT": {
      title: "Paesi",
    },
  };

  return (
    <>
      <h1>{trad[lang].title}</h1>
      {error ? (
        <div>{error}</div>
      ) : (
        <>
          {countries.length === 0 ? (
            <div>Loading...</div>
          ) : (
            <div className="container-flag">
              {countries.map((c, i) => {
                return (
                  <Link to={`/Country/${c.cca2}`} key={c.cca2}>
                    <div className="Cover-flag">
                      <h2>{c.name.common}</h2>
                      <figure className="flag">
                        <img
                          src={countries[i].flags.svg}
                          alt={`Bandiera di ${i}`}
                        />
                      </figure>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      )}
    </>
  );
};
