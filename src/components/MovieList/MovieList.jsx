import { useLocation, Link } from "react-router-dom";

const MovieList = ({ items }) => {
  const location = useLocation();
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Link to={`/movies/${item.id}`} state={{ from: location }}>
            <p>{item.original_title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default MovieList;