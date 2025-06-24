import { createContext, useState, useRef } from "react";

export const PlayerContext = createContext();

export default function PlayerProvider({ children }) {
  const [currentSong, setCurrentSong] = useState({
    title: "On & On",
    artist: "Cartoon",
    cover: "https://i1.sndcdn.com/artworks-000144156643-1d6qmr-t500x500.jpg",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(currentSong.url));

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying((prev) => !prev);
  };

  const updateSong = (song) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    const newAudio = new Audio(song.url);
    audioRef.current = newAudio;
    setCurrentSong(song);
    newAudio.play();
    setIsPlaying(true);
  };

  return (
    <PlayerContext.Provider
      value={{ currentSong, isPlaying, togglePlay, updateSong }}
    >
      {children}
    </PlayerContext.Provider>
  );
}