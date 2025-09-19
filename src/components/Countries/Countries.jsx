import { useState } from "react";
import Country from "../Country/Country";
import VisitedCountries from "../VisitedCountries/VisitedCountries";

const Countries = ({ countries }) => {
  const [visited, setVisited] = useState([]);
  const [search, setSearch] = useState("");

  const visitedCountry = (country) => {
    const exists = visited.find(
      (vis) => vis?.ccn3?.ccn3 === country?.ccn3?.ccn3
    );

    if (!exists) {
      const newVisitedCountry = [...visited, country];
      setVisited(newVisitedCountry);
    } else {
      return;
    }
  };

  // console.log(visited);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className=" md:flex justify-between ">
        <h2 className="font-medium md:font-bold text-xl md:text-3xl">
          All Countries Over The World: {countries.length}
        </h2>
        <h4 className="font-semibold text-xl md:text-2xl">
          {visited.length} Countries I've Visited
        </h4>
      </div>
      <div className="text-center my-8">
        <div className="flex gap-5 flex-wrap">
          {visited.map((visit) => (
            <VisitedCountries key={visit.ccn3.ccn3} visit={visit} />
          ))}
        </div>
        {/* <form action=""> */}
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="px-3 py-4 border-none outline-none text-black w-[300px] rounded-2xl shadow-xl bg-slate-200"
          type="text"
          placeholder="Search Country"
        />
        {/* <button className="px-5 py-4 border border-black text-black bg-slate-200 font-medium  cursor-pointer  rounded-r-2xl shadow-xl ">
          Search
        </button> */}
        {/* </form> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch mt-5">
        {filteredCountries.map((country) => (
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
