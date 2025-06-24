import { Link } from "react-router-dom";

export default function PlaylistCard({ playlist }) {
  return (
    <Link
      to={"/playlist/" + playlist.id}
      className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 block"
    >
      <img
        src={playlist.cover}
        alt={playlist.name}
        className="w-full h-32 object-cover rounded-md mb-2"
      />
      <h3 className="text-sm font-semibold truncate">{playlist.name}</h3>
      <p className="text-xs text-gray-400">{playlist.tracks} songs</p>
    </Link>
  );
}
