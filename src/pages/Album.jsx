import { useParams } from "react-router-dom";
import SongCard from "../components/SongCard";

export default function Album() {
  const { id } = useParams();
  // Fetch album by id
  const album = {
    title: "Sample Album",
    songs: [],
  };
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">{album.title}</h2>
      {album.songs.length === 0 && (
        <p className="text-gray-400">No songs found.</p>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {album.songs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </section>
  );
}
