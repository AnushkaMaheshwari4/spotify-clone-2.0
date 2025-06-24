import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-48 bg-gray-850 p-4 hidden md:block">
      <nav className="flex flex-col gap-2">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/search" className="hover:underline">
          Search
        </Link>
        <Link to="/playlist/liked" className="hover:underline">
          Liked Songs
        </Link>
      </nav>
    </aside>
  );
}
