import { useState } from "react";
import CountryDetails from "../CountryDetails/CountryDetails";

const Country = ({ country, visitedCountry }) => {
  const [toured, setToured] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleVisit = () => {
    visitedCountry(country);
    setToured(!toured);
  };

  const handleDetails = (id) => {
    setSelectedCountry(id);
  };
  return (
    <div>
      <div className=" p-3 pt-6 rounded-xl h-full bg-slate-200 text-black ">
        <img
          className="mx-auto rounded-xl h-[170px] w-full"
          src={country.flags.flags.png}
          alt={country.flags.flags.alt}
          //   height={200}
        />
        <p className="text-lg font-medium"> Name: {country.name.common}</p>
        <p>Area: {country.area.area}</p>
        <p>Population: {country.population.population}</p>
        <div className="flex justify-between items-center">
          <button
            onClick={handleVisit}
            className="px-5 py-2 border border-black text-white bg-black font-medium  cursor-pointer rounded-xl mt-3 ">
            {toured ? "Visited" : "Not Visited"}
          </button>
          <button
            onClick={() => {
              handleDetails(country.ccn3.ccn3);
            }}
            className="px-5 py-2 border border-black text-white bg-black font-medium  cursor-pointer rounded-xl mt-3 ">
            Details
          </button>
        </div>
      </div>
      {selectedCountry && (
        <CountryDetails
          id={selectedCountry}
          onClose={() => setSelectedCountry(null)}
        />
      )}
    </div>
  );
};

export default Country;
