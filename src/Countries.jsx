import { useEffect } from "react";
import { useState } from "react";
import "./Countries.scss";
import { Link } from "react-router-dom";
export default () => {
  const [countries, setcountries] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((response) => response.json())
      .then((obj) => {
        setcountries(obj);
        console.log(obj);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>COUNTRIES</h1>
      <div className="container-flag">
        {countries.map((country, i) => {
          return (
            <Link to={"/"} key={`country${i}`}>
              <div className="Cover-flag">
                <h2>{country.name.common}</h2>
                <figure className="flag">
                  <img src={countries[i].flags.svg} alt={`Bandiera di ${i}`} />
                </figure>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
