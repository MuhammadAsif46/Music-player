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


import React, { useState } from "react";
import { FaBackward, FaForward, FaPause, FaPlay } from "react-icons/fa";

import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMusic, setCurrentMusic] = useState(0);

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
    setIsPlaying((prevState) => !prevState);
  };

  const currentNaats = naats[currentMusic];
  console.log(currentNaats.srcAudio);

  console.log(naats);
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
            src={currentNaats.srcAudio}
            className=""
            controls
            typeof="audio/mp3"
            autoPlay={isPlaying}
          ></audio>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
