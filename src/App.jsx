import { useState, useEffect } from "react";
import MedalForm from "./components/MedalForm";
import MedalList from "./components/MedalList";
import SortOptions from "./components/SortOptions";
import "./App.css";

function App() {
  const STORAGE_KEY = "olympic_medals";

  // 로컬 스토리지 저장
  const getStoredCountries = () => {
    const storedData = localStorage.getItem(STORAGE_KEY);
    return storedData ? JSON.parse(storedData) : [];
  };

  const [countries, setCountries] = useState(getStoredCountries);
  const [sortByTotal, setSortByTotal] = useState(false);

  const saveToLocalStorage = (data) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

  // 국가 추가할 때 국가명 중복 시
  const addCountry = (newCountry) => {
    if (countries.some((country) => country.name === newCountry.name)) {
      alert("이미 존재하는 국가입니다.");
      return;
    }

    const updatedCountries = [...countries, newCountry];
    sortCountries(updatedCountries);
  };

  // 업데이트할 때 추가된 국가가 아닐 경우
  const updateCountry = (updatedCountry) => {
    const existingCountry = countries.find(
      (country) => country.name === updatedCountry.name
    );

    if (!existingCountry) {
      alert("등록되지 않은 국가입니다.");
      return;
    }

    const updatedCountries = countries.map((country) =>
      country.name === updatedCountry.name ? updatedCountry : country
    );

    sortCountries(updatedCountries);
  };

  // 삭제 기능
  const removeCountry = (id) => {
    const updatedCountries = countries.filter((country) => country.id !== id);
    sortCountries(updatedCountries);
  };

  // 정렬 기능
  const sortCountries = (updatedCountries) => {
    updatedCountries.sort((a, b) =>
      sortByTotal
        ? b.goldMedal +
          b.silverMedal +
          b.bronzeMedal -
          (a.goldMedal + a.silverMedal + a.bronzeMedal)
        : b.goldMedal - a.goldMedal
    );

    setCountries(updatedCountries);
    saveToLocalStorage(updatedCountries);
  };

  useEffect(() => {
    sortCountries([...countries]);
  }, [sortByTotal]);

  return (
    <div>
      <h1>2024 파리 올림픽</h1>

      <SortOptions sortByTotal={sortByTotal} onSortChange={setSortByTotal} />
      <MedalForm onAddCountry={addCountry} onUpdateCountry={updateCountry} />
      <MedalList countries={countries} onRemoveCountry={removeCountry} />
    </div>
  );
}

export default App;
