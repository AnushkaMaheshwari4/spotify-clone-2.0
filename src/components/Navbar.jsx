import { Link, useLocation } from "react-router-dom";
import { Search } from "lucide-react";

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800">
      <h1 className="text-xl font-bold">
        <Link to="/">Spotify 2.0</Link>
      </h1>
      <Link to="/search" className="flex items-center gap-1">
        <Search size={18} />
        <span className={pathname === "/search" ? "font-semibold" : ""}>
          Search
        </span>
      </Link>
    </header>
  );
}
