function SortOptions({ sortByTotal, onSortChange }) {
    return (
        <div className="sort-options">
            <label>
                <input
                    type="radio"
                    name="sortOption"
                    value="gold"
                    checked={!sortByTotal}
                    onChange={() => onSortChange(false)}
                />
                금메달 기준 정렬
            </label>
            <label>
                <input
                    type="radio"
                    name="sortOption"
                    value="total"
                    checked={sortByTotal}
                    onChange={() => onSortChange(true)}
                />
                총메달 기준 정렬
            </label>
        </div>
    );
}

export default SortOptions;
