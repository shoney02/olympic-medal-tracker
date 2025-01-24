import MedalItem from "./MedalItem";

function MedalList({ countries, onRemoveCountry }) {
  return countries.length === 0 ? (
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
        {countries.map((country) => (
          <MedalItem
            key={country.id}
            country={country}
            onRemoveCountry={onRemoveCountry}
          />
        ))}
      </tbody>
    </table>
  );
}

export default MedalList;
