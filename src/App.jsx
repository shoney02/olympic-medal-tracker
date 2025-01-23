import { useState } from "react";
import MedalForm from "./components/MedalForm";
import MedalList from "./components/MedalList";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);

  const addCountry = (newCountry) => {
    const countryExists = countries.some((country) => country.name === newCountry.name);

    if (countryExists) {
      alert("이미 존재하는 국가입니다.");
      return;
    }

      const updatedCountries = [...countries, newCountry].sort(
        (a, b) => b.goldMedal - a.goldMedal
      );
      setCountries(updatedCountries);
    };

    const updateCountry = (updatedCountry) => {
      const countryExists = countries.some((country) => country.name === updatedCountry);

      if (!countryExists) {
        alert("중복된 국가가 없습니다.");
        return;
      }

      const updatedCountries = countries.map((country) =>
        country.name === updatedCountry.name ? updatedCountry : country
      );
      setCountries(updatedCountries.sort((a, b) => b.goldMedal - a.goldMedal));
    };

    const removeCountry = (id) => {
      setCountries(countries.filter((country) => country.id !== id));
    };

    return (
      <div>
        <h1>2024 파리 올림픽</h1>
        <MedalForm onAddCountry={addCountry} onUpdateCountry={updateCountry} />
        <MedalList countries={countries} onRemoveCountry={removeCountry} />
      </div>
    );
  }

  export default App;
