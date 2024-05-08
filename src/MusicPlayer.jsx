import React, { useState, useEffect, useRef } from "react";
import { FaBackward, FaForward, FaPause, FaPlay } from "react-icons/fa";

import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMusic, setCurrentMusic] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const naats = [
    {
      artistNames: "Hafiz Tahir Qadri",
      title: "Mien Kabe ko dekhonga",
      srcImg: img1,
      srcAudio: "/src/audio/tahir-qadri.mp3",
    },
    {
      artistNames: "Zohaib Ashrafi",
      title: "Wo shar e muhabbat",
      srcImg: img3,
      srcAudio: "/src/audio/zohaib-ashrafi.mp3",
    },
    {
      artistNames: "Owais Raza Qadri",
      title: "Ho karam sarkar ab tu",
      srcImg: img2,
      srcAudio: "/src/audio/owais-qadri.mp3",
    },
    {
      artistNames: "Ashfaq Attari",
      title: "Barwien ka noor",
      srcImg: img4,
      srcAudio: "/src/audio/ashfaq-attari.mp3",
    },
  ];

  const backwardHandler = () => {
    setCurrentMusic((prevIndex) =>
      prevIndex === 0 ? naats.length - 1 : prevIndex - 1
    );
  };

  const forwardHandler = () => {
    setCurrentMusic((prevIndex) =>
      prevIndex === naats.length - 1 ? 0 : prevIndex + 1
    );
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying((prevState) => !prevState);
  };

  const updateTime = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  useEffect(() => {
    audioRef.current.addEventListener("loadedmetadata", () => {
      setDuration(audioRef.current.duration);
    });
    audioRef.current.addEventListener("timeupdate", () => {
      setCurrentTime(audioRef.current.currentTime);
    });
  }, [currentMusic]);

  const currentNaats = naats[currentMusic];

  return (
    <div className="box center">
      <div className="box-1 center">
        <h4 className="name">{currentNaats.artistNames}</h4>
        <div className="art">
          <img
            className="center round"
            src={currentNaats.srcImg}
            alt="Artist"
            id="artist"
          />
        </div>
        <div className="art-name">
          <p className="title run">{currentNaats.title}</p>
        </div>
        <div className="prog">
          <div className="time">
            <div className="start">
              <p className="start">{formatTime(currentTime)}</p>
            </div>
            <div className="end">
              <p className="end">
                {formatTime(duration) ? formatTime(duration) : "00:00"}
              </p>
            </div>
          </div>
          {/* <div className="line"> */}
          <input
            type="range"
            style={{
              background: `linear-gradient(to right, #ccd43f ${
                (currentTime / duration) * 100
              }%, #ccc ${(currentTime / duration) * 100}%)`,
            }}
            class="form-range text-success z-1"
            value={(currentTime / duration) * 100 || 0}
            id="customRange1"
          />
          {/* </div> */}
        </div>
        <div className="msc center">
          <div className="ctrl center" onClick={backwardHandler}>
            <FaBackward />
          </div>
          <div className="ctrl center" id="playing" onClick={togglePlayPause}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </div>
          <div className="ctrl center" onClick={forwardHandler}>
            <FaForward />
          </div>
        </div>
      </div>
      <audio
        ref={audioRef}
        src={currentNaats.srcAudio}
        autoPlay
        onTimeUpdate={updateTime}
      ></audio>
    </div>
  );
};

const formatTime = (time) => {
  if (isNaN(time)) {
    return "00:00";
  }
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export default MusicPlayer;
