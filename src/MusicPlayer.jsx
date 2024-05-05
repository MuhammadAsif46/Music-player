import React, { useState } from "react";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import { FaBackward, FaForward, FaPause, FaPlay } from "react-icons/fa6";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMusic, setCurrentMusic] = useState(0);

  const naats = [
    {
      artistNames: "Hafiz Tahir Qadri",
      title: "Mien Kabe ko dekhonga",
      srcImg: "",
      srcAudio: "",
    },
    {
      artistNames: "Zohaib Ashrafi",
      title: "Wo shar e muhabbat",
      srcImg: "",
      srcAudio: "",
    },
    {
      artistNames: "Owais Raza Qadri",
      title: "Ho karam sarkar ab tu",
      srcImg: "",
      srcAudio: "",
    },
    {
      artistNames: "Ashfaq Attari",
      title: "Barwien ka noor",
      srcImg: "",
      srcAudio: "",
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
    setIsPlaying((prevState) => !prevState);
  };

  const currentNaats = naats[currentMusic];

  return (
    <div className="box center">
      <div className="box-1 center">
        <h4 className="name">{currentNaats.artistNames}</h4>
        <div className="art">
          <img
            className="center round"
            src={img1}
            alt="image-One"
            id="artist"
          />
        </div>
        <div className="art-name">
          <p className="title run">{currentNaats.title}</p>
        </div>
        <div className="prog">
          <div className="time">
            <div className="start">
              <p className="start">0:00</p>
            </div>
            <div className="end">
              <p className="end">0:00</p>
            </div>
          </div>
          <div className="line">
            <div className="lineChild"></div>
          </div>
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
          <audio 
            src={currentNaats.src}
            className=""
            controls
            autoPlay={isPlaying}
          ></audio>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
