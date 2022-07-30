import { Link } from "react-router-dom";

export default function Character({ id, name, image }) {
  return (
    <div>
      <Link to={`/${id}`}>
        <h3>{name}</h3>

        <img src={image} alt="imagen" />
      </Link>
    </div>
  );
}
