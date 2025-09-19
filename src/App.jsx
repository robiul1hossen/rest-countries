import { Suspense, useEffect, useState } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const loadCountries = async () => {
      const res = await fetch("https://openapi.programming-hero.com/api/all");
      const data = await res.json();
      setCountries(data.countries);
    };
    loadCountries();
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <Suspense fallback={<p>loading</p>}>
        <Countries countries={countries} />
      </Suspense>
    </div>
  );
}

export default App;
