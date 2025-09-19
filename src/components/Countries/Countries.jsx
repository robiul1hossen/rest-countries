import { useState } from "react";
import Country from "../Country/Country";

const Countries = ({ countries }) => {
  const [visited, setVisited] = useState([]);

  const visitedCountry = (country) => {
    const newVisitedCountry = [...visited, country];
    setVisited(newVisitedCountry);
  };

  return (
    <>
      <div className=" flex justify-between ">
        <h2 className="font-bold text-3xl">
          All Countries Over The World: {countries.length}
        </h2>
        <h4 className="font-semibold text-2xl">
          {visited.length} Countries I've Visited
        </h4>
      </div>
      <div className="grid grid-cols-3 gap-5 items-stretch mt-5">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            visitedCountry={visitedCountry}
          />
        ))}
      </div>
    </>
  );
};

export default Countries;
