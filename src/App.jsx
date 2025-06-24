import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Playlist from "./pages/Playlist";
import Album from "./pages/Album";
import PlayerProvider from "./context/PlayerContext";

export default function App() {
  return (
    <PlayerProvider>
      <div className="flex h-screen overflow-hidden bg-gray-900 text-white">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="flex-1 overflow-y-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/playlist/:id" element={<Playlist />} />
              <Route path="/album/:id" element={<Album />} />
            </Routes>
          </main>
          <Player />
        </div>
      </div>
    </PlayerProvider>
  );
}
