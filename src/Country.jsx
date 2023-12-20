import { useState } from "react";
import { useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import LangContext from "./LangContext";

export default ({}) => {
  const [country, setCountry] = useState();
  const { code } = useParams();
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then((response) => response.json())
      .then((obj) => setCountry(obj[0]))
      .catch((error) => console.log(error));
  }, []);

  const lang = useContext(LangContext);

  const trad = {
    "en-US": { title: "Countries", prefisso: "eng" },
    "it-IT": {
      title: "Paesi",
      prefisso: "ita",
    },
  };

  const prefisso2 = [trad[lang].prefisso];

  return (
    <>
      {code === undefined && <Navigate to="/Countries" />}
      {!country ? (
        <p>Loading...</p>
      ) : (
        <div className="Cover-flag">
          <h2>
            {lang === "en-US"
              ? country.name.common
              : country.translations[`${prefisso2}`].common}
          </h2>
          <figure className="flag">
            <img src={country.flags.svg} alt={`Bandiera`} />
          </figure>
          <p> Region: {country.region}</p>
          <p> Start week: {country.startOfWeek}</p>
        </div>
      )}
    </>
  );
};
