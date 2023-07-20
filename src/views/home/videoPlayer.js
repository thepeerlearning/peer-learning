import { useState, useRef } from "react";
import { PlayerIcon, PlayerPaused } from "../../components/svg";
import { Box } from "@mui/material";

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        src={src}
        onClick={togglePlay}
        // loop
        controls
        // muted
        style={{
          width: "100%",
          height: 506,
          borderRadius: "15px",
          background: "#001B38",
        }}
      />
      <Box component="div" sx={{ opacity: 0.5 }}>
        {!isPlaying && (
          <Box component="div" className="play-icon" onClick={togglePlay}>
            <PlayerIcon />
          </Box>
        )}
        {isPlaying && (
          <Box component="div" className="play-icon" onClick={togglePlay}>
            <PlayerPaused />
          </Box>
        )}
      </Box>
    </div>
  );
};

export default VideoPlayer;
