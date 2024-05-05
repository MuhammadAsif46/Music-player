import React from 'react'
import img1 from "./assets/img1.jpg"
import { FaBackward, FaForward, FaPause, FaPlay } from "react-icons/fa6";


const MusicPlayer = () => {

    const backward =() => {
        console.log("hello");
    }
    const forward =() => {
        console.log("hello");
    }
  return (
    <div>
        <div>
            <h4>Justin beaber</h4>
            <div>
                <img src={img1} alt="image-One" id='artist' />
            </div>
            <div>
                <p>God`s plan</p>
            </div>
            <div>
                <div>
                    <div>
                        <p>0:00</p>
                    </div>
                    <div>
                    <p>0:00</p>
                    </div>
                </div>
                <div>
                    <div></div>
                </div>
            </div>
            <div>
                <div onClick={backward}>
                <FaBackward />
                </div>
                <div id='playing'>
                <FaPlay />
                <FaPause />
                </div>
                <div onClick={forward}>
                    <FaForward/>
                </div>
                <audio src="" className=''></audio>
            </div>
        </div>
    </div>
  )
}

export default MusicPlayer