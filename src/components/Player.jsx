import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import { SkipBack, Play, Pause, SkipForward } from "lucide-react";

export default function Player() {
  const { currentSong, isPlaying, togglePlay } = useContext(PlayerContext);

  return (
    <div className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img
          src={currentSong.cover}
          alt="cover"
          className="w-12 h-12 rounded"
        />
        <div>
          <h4 className="text-sm font-bold">{currentSong.title}</h4>
          <p className="text-xs text-gray-400">{currentSong.artist}</p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <SkipBack className="cursor-pointer" />
        {isPlaying ? (
          <Pause className="cursor-pointer" onClick={togglePlay} />
        ) : (
          <Play className="cursor-pointer" onClick={togglePlay} />
        )}
        <SkipForward className="cursor-pointer" />
      </div>
    </div>
  );
}
