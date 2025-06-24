import { useState } from "react";
import songsData from "../data/songsData";
import SongCard from "../components/SongCard";

export default function Search() {
  const [query, setQuery] = useState("");

  const filteredSongs = songsData.filter((song) =>
    song.title.toLowerCase().includes(query.toLowerCase()) ||
    song.artist.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Search Songs</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by song or artist..."
        className="w-full p-2 rounded mb-4 bg-gray-700 text-white"
      />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredSongs.length > 0 ? (
          filteredSongs.map((song) => <SongCard key={song.id} song={song} />)
        ) : (
          <p className="text-gray-400 col-span-full">No songs found.</p>
        )}
      </div>
    </div>
  );
}
