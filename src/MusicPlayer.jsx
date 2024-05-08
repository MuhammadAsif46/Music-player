// import React, { useState } from "react";
// import img1 from "./assets/img1.jpg";
// import img2 from "./assets/img2.jpg";
// import img3 from "./assets/img3.jpg";
// import img4 from "./assets/img4.jpg";
// import { FaBackward, FaForward, FaPause, FaPlay } from "react-icons/fa6";

// import aud1 from "./audio/tahir-qadri.mp3";
// import aud2 from "./audio/zohaib-ashrafi.mp3";
// import aud3 from "./audio/owais-qadri.mp3";
// import aud4 from "./audio/ashfaq-attari.mp3";

// const MusicPlayer = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentMusic, setCurrentMusic] = useState(0);

//   const naats = [
//     {
//       artistNames: "Hafiz Tahir Qadri",
//       title: "Mien Kabe ko dekhonga",
//       srcImg: {img1},
//       srcAudio: "./audio/tahir-qadri.mp3",
//     },
//     {
//       artistNames: "Zohaib Ashrafi",
//       title: "Wo shar e muhabbat",
//       srcImg: {img2},
//       srcAudio: {aud2},
//     },
//     {
//       artistNames: "Owais Raza Qadri",
//       title: "Ho karam sarkar ab tu",
//       srcImg: {img3},
//       srcAudio: {aud3},
//     },
//     {
//       artistNames: "Ashfaq Attari",
//       title: "Barwien ka noor",
//       srcImg: {img4},
//       srcAudio: {aud4},
//     },
//   ];

//   const backwardHandler = () => {
//     setCurrentMusic((prevIndex) =>
//       prevIndex === 0 ? naats.length - 1 : prevIndex - 1
//     );
//   };

//   const forwardHandler = () => {
//     setCurrentMusic((prevIndex) =>
//       prevIndex === naats.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const togglePlayPause = () => {
//     setIsPlaying((prevState) => !prevState);
//   };

//   const currentNaats = naats[currentMusic];

//   return (
//     <div className="box center">
//       <div className="box-1 center">
//         <h4 className="name">{currentNaats.artistNames}</h4>
//         <div className="art">
//           <img
//             className="center round"
//             src={img1}
//             alt="image-One"
//             id="artist"
//           />
//         </div>
//         <div className="art-name">
//           <p className="title run">{currentNaats.title}</p>
//         </div>
//         <div className="prog">
//           <div className="time">
//             <div className="start">
//               <p className="start">0:00</p>
//             </div>
//             <div className="end">
//               <p className="end">0:00</p>
//             </div>
//           </div>
//           <div className="line">
//             <div className="lineChild"></div>
//           </div>
//         </div>
//         <div className="msc center">
//           <div className="ctrl center" onClick={backwardHandler}>
//             <FaBackward />
//           </div>
//           <div className="ctrl center" id="playing" onClick={togglePlayPause}>
//             {isPlaying ? <FaPause /> : <FaPlay />}
//           </div>
//           <div className="ctrl center" onClick={forwardHandler}>
//             <FaForward />
//           </div>
//           <audio
//             src="./audio/tahir-qadri.mp3"
//             className=""
//             controls
//             // autoPlay={isPlaying}
//           ></audio>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MusicPlayer;

// import React, { useState } from "react";
// import { FaBackward, FaForward, FaPause, FaPlay } from "react-icons/fa";

// import img1 from "./assets/img1.jpg";
// import img2 from "./assets/img2.jpg";
// import img3 from "./assets/img3.jpg";
// import img4 from "./assets/img4.jpg";

// const MusicPlayer = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentMusic, setCurrentMusic] = useState(0);

//   const naats = [
//     {
//       artistNames: "Hafiz Tahir Qadri",
//       title: "Mien Kabe ko dekhonga",
//       srcImg: img1,
//       srcAudio: "/src/audio/tahir-qadri.mp3",
//     },
//     {
//       artistNames: "Zohaib Ashrafi",
//       title: "Wo shar e muhabbat",
//       srcImg: img3,
//       srcAudio: "/src/audio/zohaib-ashrafi.mp3",
//     },
//     {
//       artistNames: "Owais Raza Qadri",
//       title: "Ho karam sarkar ab tu",
//       srcImg: img2,
//       srcAudio: "/src/audio/owais-qadri.mp3",
//     },
//     {
//       artistNames: "Ashfaq Attari",
//       title: "Barwien ka noor",
//       srcImg: img4,
//       srcAudio: "/src/audio/ashfaq-attari.mp3",
//     },
//   ];

//   const backwardHandler = () => {
//     setCurrentMusic((prevIndex) =>
//       prevIndex === 0 ? naats.length - 1 : prevIndex - 1
//     );
//   };

//   const forwardHandler = () => {
//     setCurrentMusic((prevIndex) =>
//       prevIndex === naats.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const togglePlayPause = () => {
//     setIsPlaying((prevState) => !prevState);
//     console.log("helllo")
//   };

//   const currentNaats = naats[currentMusic];
//   // console.log(currentNaats.srcAudio);

//   // console.log(naats);
//   return (
//     <div className="box center">
//       <div className="box-1 center">
//         <h4 className="name">{currentNaats.artistNames}</h4>
//         <div className="art">
//           <img
//             className="center round"
//             src={currentNaats.srcImg}
//             alt="Artist"
//             id="artist"
//           />
//         </div>
//         <div className="art-name">
//           <p className="title run">{currentNaats.title}</p>
//         </div>
//         <div className="prog">
//           <div className="time">
//             <div className="start">
//               <p className="start">0:00</p>
//             </div>
//             <div className="end">
//               <p className="end">0:00</p>
//             </div>
//           </div>
//           <div className="line">
//             <div className="lineChild"></div>
//           </div>
//         </div>
//         <div className="msc center">
//           <div className="ctrl center" onClick={backwardHandler}>
//             <FaBackward />
//           </div>
//           <div className="ctrl center" id="playing" onClick={togglePlayPause}>
//             {isPlaying ? <FaPause /> : <FaPlay />}
//           </div>
//           <div className="ctrl center" onClick={forwardHandler}>
//             <FaForward />
//           </div>
//           <audio
//             src={currentNaats.srcAudio}
//             className=""
//             controls
//             typeof="audio/mp3"
//             autoPlay={isPlaying}
//           ></audio>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MusicPlayer;

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
    console.log(duration);
    console.log(currentMusic);
    console.log(currentTime);
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

  const seekHandler = (e) => {
    const seekTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying,currentMusic,duration]);

  // useEffect(()=>{
  //   setDuration(0)
  // },[currentMusic])

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
              <p className="end">{formatTime(duration)}</p>
            </div>
          </div>
          {/* <div className="line"> */}
          <input type="range" style={{
    background: `linear-gradient(to right, #ccd43f ${(currentTime / duration) * 100}%, #ccc ${(currentTime / duration) * 100}%)`
  }} class="form-range text-success z-1" value={(currentTime/duration)*100 || 0} id="customRange1"/>
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
        onTimeUpdate={updateTime}
      ></audio>
    </div>
  );
};

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export default MusicPlayer;
