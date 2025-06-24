import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

export default function SongCard({ song }) {
  const { updateSong } = useContext(PlayerContext);

  const handlePlay = () => {
    updateSong(song);
  };

  return (
    <div
      className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 cursor-pointer"
      onClick={handlePlay}
    >
      <img
        src={song.cover}
        alt={song.title}
        className="w-full h-32 object-cover rounded-md mb-2"
      />
      <h3 className="text-sm font-semibold truncate">{song.title}</h3>
      <p className="text-xs text-gray-400">{song.artist}</p>
    </div>
  );
}
