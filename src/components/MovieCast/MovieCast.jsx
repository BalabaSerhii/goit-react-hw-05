import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { fetchFilmsCast } from "../../api-film";

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  const notify = () => toast.error("Something went wrong. Please, try again!");

  useEffect(() => {
    async function fetchCast() {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchFilmsCast(movieId);
        setCast(data.cast);
      } catch (error) {
        setError(true);
        notify();
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCast();
  }, [movieId]);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <Toaster />}
      <ul>
        {cast.length > 0
          ? cast.map(({ id, name, character, profile_path, backdrop_path }) => (
              <li key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w200${profile_path}`
                      : `https://image.tmdb.org/t/p/w200${backdrop_path}`
                  }
                  alt={name}
                  loading="lazy"
                  width="200"
                />
                <div>
                  <p>{name}</p>
                  <p>Character: {character}</p>
                </div>
              </li>
            ))
          : "Sorry, there`s no information about actors!"}
      </ul>
    </div>
  );
};

export default MovieCast;