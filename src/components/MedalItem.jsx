function MedalItem({ country, onRemoveCountry }) {
    return (
        <tr>
            <td>{country.name}</td>
            <td>{country.goldMedal}</td>
            <td>{country.silverMedal}</td>
            <td>{country.bronzeMedal}</td>
            <td>
                <button className="delete-btn" onClick={() => onRemoveCountry(country.id)}>삭제</button>
            </td>
        </tr>
    );
}

export default MedalItem;
