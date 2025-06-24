import songsData from "../data/songsData";
import SongCard from "../components/SongCard";

export default function Home() {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">Trending Songs</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {songsData.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </section>
  );
}
