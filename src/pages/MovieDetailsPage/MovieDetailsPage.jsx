import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLocation, useParams, Link } from "react-router-dom";
import { fetchFilmsDetails } from "../../api-film";

const MovieDetailsPage = () => {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const { movieId } = useParams();

  const notify = () => toast.error("Something went wrong. Please, try again!");

  useEffect(() => {
    async function fetchDetails() {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchFilmsDetails(movieId);
        setDetails(data);
      } catch (error) {
        setError(true);
        notify();
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchDetails();
  }, [movieId]);

  const {
    poster_path,
    backdrop_path,
    original_title,
    popularity,
    overview,
    genres,
  } = details;

  return (
    <main>
      <div>
        {loading && <div>Loading...</div>}
        {error && <Toaster />}
        <Link to={location.state?.from || "/movies"}> Go back </Link>
        <div>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300${poster_path}`
                : `https://image.tmdb.org/t/p/w300${backdrop_path}`
            } loading="lazy"
            alt="Image of film"
          />
        </div>
        <h1>{original_title}</h1>
        
      </div>
    </main>
  );
};
