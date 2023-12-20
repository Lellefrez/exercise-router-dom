import { useState } from "react";
import { useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

export default ({}) => {
  const [country, setCountry] = useState();
  const { code } = useParams();
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then((response) => response.json())
      .then((obj) => setCountry(obj[0]))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {code === undefined && <Navigate to="/Countries" />}
      {!country ? (
        <p>Loading...</p>
      ) : (
        <div className="Cover-flag">
          <h2>{country.name.common}</h2>
          <figure className="flag">
            <img src={country.flags.svg} alt={`Bandiera`} />
          </figure>
        </div>
      )}
    </>
  );
};
