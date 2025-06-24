import { useParams } from "react-router-dom";
import SongCard from "../components/SongCard";

export default function Playlist() {
  const { id } = useParams();
  // Fetch playlist by id
  const playlist = {
    name: "Liked Songs",
    songs: [],
  };
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">{playlist.name}</h2>
      {playlist.songs.length === 0 && (
        <p className="text-gray-400">No songs yet.</p>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {playlist.songs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </section>
  );
}
