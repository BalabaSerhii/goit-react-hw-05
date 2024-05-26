import { useEffect, useState } from "react";
import { fetchFilms } from "../../api-film";
import toast, { Toaster } from "react-hot-toast";
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
  const [trend, setTrends] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const notify = () => toast("Some error has occurred. Try again!");

  useEffect(() => {
    async function fetchTrends() {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchFilms();
        setTrends(data.results);
      } catch (error) {
        setError(true);
        notify();
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchTrends();
  }, []);

  return <div>
    <main>
      <div>
        {loading&& <div>Loading...</div>}
        {error&& <Toaster/>}
        <h1>Trending Today</h1>
        <MovieList items={trend}/>
      </div>
    </main>
  </div>;
}
