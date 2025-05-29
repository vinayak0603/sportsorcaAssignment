import { useEffect, useState, useRef, useCallback } from 'react';
import axios from 'axios';
import TopBar from './components/TopBar';

function App() {
  const [matches, setMatches] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const isFetchingRef = useRef(false);

  const fetchMatches = useCallback(async () => {
    if (isFetchingRef.current || !hasMore) return;
    isFetchingRef.current = true;

    try {
      const res = await axios.get(`http://localhost:5000/api/soccer?page=${page}&limit=15`);
      const newMatches = res.data;

      if (newMatches.length === 0) {
        setHasMore(false);
      } else {
        setMatches((prev) => [...prev, ...newMatches]);
        setPage((prev) => prev + 1);
      }
    } catch (err) {
      console.error('Fetch error:', err.message);
    } finally {
      isFetchingRef.current = false;
    }
  }, [page, hasMore]);

  useEffect(() => {
    fetchMatches();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.innerHeight + window.scrollY;
      const threshold = document.body.offsetHeight - 100;

      if (scrollY >= threshold) {
        fetchMatches();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [fetchMatches]);

  return (
    <div className="min-h-screen bg-black text-white py-10 px-4 space-x-2">
      <TopBar/>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 border-b-2 border-white pb-3">
          ⚽ Upcoming Soccer Matches
        </h1>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {matches.map((match, idx) => (
            <div
              key={idx}
              className="bg-black border border-white rounded-xl p-5 shadow-md transition duration-300 hover:border-blue-500 hover:text-blue-500"
            >
              <div className="text-lg font-semibold mb-2">{match.teams}</div>
              <div className="text-sm">
                📅 {new Date(match.date).toLocaleDateString()}<br />
                ⏰ {new Date(match.date).toLocaleTimeString()}
              </div>
            </div>
          ))}
        </div>

        {!hasMore && (
          <p className="text-center text-gray-400 mt-6">No more matches available.</p>
        )}
      </div>
    </div>
  );
}

export default App;
