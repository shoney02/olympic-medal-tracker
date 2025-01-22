import { useState } from "react";
import "./App.css";

function App() {
  const initialState = [];
  const [countrys, setCountrys] = useState(initialState);

  // TODO: 이름과 나이를 각각 상태로 정의하세요. 초기값은 빈문자열("")입니다.
  const [name, setName] = useState("");
  const [goldMedal, setGoldMedal] = useState("");
  const [silverMedal, setSilverMedal] = useState("");
  const [bronzeMedal, setBronzeMedal] = useState("");

  const addCountry = (e) => {
    e.preventDefault();
    if (!name || !goldMedal || !silverMedal || !bronzeMedal) {
      alert("국가명과 메달수를 입력하세요.");
      return;
    }
    setCountrys([
      ...countrys,
      {
        id: Date.now(),
        name,
        goldMedal: Number(goldMedal),
        silverMedal: Number(silverMedal),
        bronzeMedal: Number(bronzeMedal)
      }
    ]);
    setName("");
    setGoldMedal("");
    setSilverMedal("");
    setBronzeMedal("");
  };

  const removeCountry = (id) => {
    setCountrys(countrys.filter((country) => country.id !== id));
  };

  return (
    <>
      <h1>2024 파리 올림픽</h1>
      <form onSubmit={addCountry}>
        <input
          type="text"
          placeholder="이름"
          value={name} onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="금메달"
          value={goldMedal} onChange={(e) => setGoldMedal(e.target.value)}
        />
        <input
          type="number"
          placeholder="은메달"
          value={silverMedal} onChange={(e) => setSilverMedal(e.target.value)}
        />
        <input
          type="number"
          placeholder="동메달"
          value={bronzeMedal} onChange={(e) => setBronzeMedal(e.target.value)}
        />
        <button type="submit">국가 추가</button>
        <button type="submit">업데이트</button>
      </form>
      <ul>
        {countrys.map((country) => (
          <li key={country.id} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            국가명: {country.name},
            금메달: {country.goldMedal},
            은메달: {country.silverMedal},
            동메달: {country.bronzeMedal}
            <button onClick={() => removeCountry(country.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;