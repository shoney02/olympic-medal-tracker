import { useState } from "react";

function MedalForm({ onAddCountry, onUpdateCountry }) {
  const [name, setName] = useState("");
  const [goldMedal, setGoldMedal] = useState("");
  const [silverMedal, setSilverMedal] = useState("");
  const [bronzeMedal, setBronzeMedal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || goldMedal === "" || silverMedal === "" || bronzeMedal === "") {
      alert("국가명과 메달수를 입력하세요.");
      return;
    }

    const newCountry = {
      id: Date.now(),
      name,
      goldMedal: Number(goldMedal),
      silverMedal: Number(silverMedal),
      bronzeMedal: Number(bronzeMedal),
    };

    onAddCountry(newCountry);

    resetForm();
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!name || goldMedal === "" || silverMedal === "" || bronzeMedal === "") {
      alert("국가명과 메달수를 입력하세요.");
      return;
    }

    const updatedCountry = {
      id: Date.now(),
      name,
      goldMedal: Number(goldMedal),
      silverMedal: Number(silverMedal),
      bronzeMedal: Number(bronzeMedal),
    };

    onUpdateCountry(updatedCountry);

    resetForm();
  };

  const resetForm = () => {
    setName("");
    setGoldMedal("");
    setSilverMedal("");
    setBronzeMedal("");
  };

  return (
    <form className="form">
      <input
        type="text"
        placeholder="국가명"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="금메달"
        value={goldMedal}
        onChange={(e) => setGoldMedal(Math.max(0, Number(e.target.value)))}
      />
      <input
        type="number"
        placeholder="은메달"
        value={silverMedal}
        onChange={(e) => setSilverMedal(Math.max(0, Number(e.target.value)))}
      />
      <input
        type="number"
        placeholder="동메달"
        value={bronzeMedal}
        onChange={(e) => setBronzeMedal(Math.max(0, Number(e.target.value)))}
      />
      <button type="submit" className="add-btn" onClick={handleSubmit}>
        국가 추가
      </button>
      <button type="button" className="update-btn" onClick={handleUpdate}>
        업데이트
      </button>
    </form>
  );
}

export default MedalForm;
