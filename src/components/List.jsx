import "./List.css";

function List({ children, onSelect }) {
  return (
    <li className="listPlanets">
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}

export default List;
