import { useState } from "react";
import "./App.css";

function App() {
  const initialState = [
    { id: 1, name: "대한민국", goldMedal: 20, silverMedal: 20, bronzeMedal: 20 },
    { id: 2, name: "캐나다", goldMedal: 21, silverMedal: 21, bronzeMedal: 21 },
  ];
  const [countrys, setUsers] = useState(initialState);

  // TODO: 이름과 나이를 각각 상태로 정의하세요. 초기값은 빈문자열("")입니다.
  const [name, setName] = useState("");
  const [goldMedal, setGoldMedal] = useState("");
  const [silverMedal, setSilverMedal] = useState("");
  const [bronzeMedal, setBronzeMedal] = useState("");

  const addUser = (e) => {
    e.preventDefault();
    // TODO: 이름과 나이가 모두 입력되지 않았을 때는 alert 처리하고 함수를 종료하세요. 논리합연산자 (||) 를 이용하세요.
    if (!name || !goldMedal || !silverMedal || !bronzeMedal) {
      alert("국가명과 메달수를 입력하세요.");
      return;
    }
    // TODO: 사용자 리스트 상태를 업데이트 하세요. spread operator 를 사용하고, 추가되는 id는 현재 시간을 밀리초 단위로 반환하는 Date.now() 를 사용하세요.
    setUsers([...countrys, { id: Date.now(), name, goldMedal: Number(goldMedal), silverMedal: Number(silverMedal), bronzeMedal: Number(bronzeMedal)}]);
    setName("");
    setGoldMedal("");
    setSilverMedal("");
    setBronzeMedal("");
  };

  const removeUser = (id) => {
    // TODO: filter 메소드를 사용해서 사용자 삭제 로직을 구현해 보세요.
    setUsers(countrys.filter(country => country.id !== id));
  };

  return (
    <>
      <h1>2024 파리 올림픽</h1>
      <form onSubmit={addUser}>
        {/* TODO: input 태그에 value, onChange 속성을 추가해서 이름과 나이의 상태와 상태변경 로직을 연결하세요 */}
        <input type="text" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="number" placeholder="금메달" value={goldMedal} onChange={(e) => setAge(e.target.value)}/>
        <button type="submit">국가 추가</button>
        <button>업데이트</button>
      </form>
      <ul>
        {/* TODO: map 메소드를 이용해서 user 리스트를 렌더링하세요.  */}
        {/* 이름: John, 나이: 20 [삭제] 버튼이 하나의 행에 나올 수 있도록 해보세요. (hint: flex) */}
        {countrys.map(user => (
          <li key={user.id} style={{ display: "flex", alignItems: "center", gap: "10px"}}>
            국가명: {user.name}, 금메달: {user.goldMedal}, 은메달: {}<button onClick={() => removeUser(user.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;