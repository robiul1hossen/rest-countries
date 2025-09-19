import React from "react";

const VisitedCountries = ({ visit }) => {
  console.log(visit);
  return (
    <div>
      <img className="h-[100px] w-[150px]" src={visit.flags.flags.png} alt="" />
      <div className="">
        <p className="text-lg font-medium">
          Name:{" "}
          <span className="font-[500] text-[16px]">{visit.name.common}</span>
        </p>
        <p className="text-lg font-medium">
          Region:{" "}
          <span className="font-[500] text-[16px]">{visit.region.region}</span>
        </p>
      </div>
    </div>
  );
};

export default VisitedCountries;
