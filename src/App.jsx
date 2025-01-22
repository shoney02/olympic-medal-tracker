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
    <div>
      <h1>2024 파리 올림픽</h1>
      <form onSubmit={addCountry} className="form">
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="금메달"
          value={goldMedal}
          onChange={(e) => setGoldMedal(e.target.value)}
        />
        <input
          type="number"
          placeholder="은메달"
          value={silverMedal}
          onChange={(e) => setSilverMedal(e.target.value)}
        />
        <input
          type="number"
          placeholder="동메달"
          value={bronzeMedal}
          onChange={(e) => setBronzeMedal(e.target.value)}
        />
        <button type="submit" className="add-btn">국가 추가</button>
        <button type="button" className="update-btn">업데이트</button>
      </form>

      {countrys.length === 0 ? (
        <p className="empty-message">아직 추가된 국가가 없습니다.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>국가명</th>
              <th>금메달</th>
              <th>은메달</th>
              <th>동메달</th>
              <th>액션</th>
            </tr>
          </thead>
          <tbody>
            {countrys.map((country) => (
              <tr key={country.id}>
                <td>국가명: {country.name}</td>
                <td>금메달: {country.goldMedal}</td>
                <td>은메달: {country.silverMedal}</td>
                <td>동메달: {country.bronzeMedal}</td>
                <td>
                  <button className="delete-btn" onClick={() => removeCountry(country.id)}>삭제</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;