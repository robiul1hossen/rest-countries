import { useEffect, useState } from "react";

const CountryDetails = ({ id, onClose }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const loadDetails = async () => {
      const res = await fetch(
        `https://openapi.programming-hero.com/api/alpha/${id}`
      );
      const result = await res.json();
      setDetails(result.countries[0]);
    };
    loadDetails();
  }, [id]);
  console.log(details?.currencies?.currencies);
  return (
    <dialog open className="modal">
      <div className="modal-box">
        {details ? (
          <>
            <h3 className="font-bold text-lg">Name: {details?.name?.common}</h3>
            <img
              className="rounded-lg"
              src={details.flags.flags.png}
              alt={details.flags.flags.alt}
            />
            <h3>Official Name: {details.name.official}</h3>
            <p>Capital: {details.capital?.capital[0]}</p>
            <p>Area: {details.area.area}</p>
            <p>Population: {details?.population.population}</p>
            <p>Currencies: {details?.currencies?.currencies.JMD?.name}</p>
            <p>
              Currencies Symbol: {details?.currencies?.currencies.JMD?.symbol}
            </p>
            <p>Continents: {details.continents.continents[0]}</p>
            <p>Region: {details?.region.region}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}

        <div className="modal-action">
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default CountryDetails;
