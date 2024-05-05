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
    <div className='box center'>
        <div className='box-1 center'>
            <h4 className='name'>Justin beaber</h4>
            <div className='art'>
                <img className='center round' src={img1} alt="image-One" id='artist' />
            </div>
            <div className='art-name'>
                <p className='title run'>God`s plan</p>
            </div>
            <div className='prog'>
                <div className='time'>
                    <div className='start'>
                        <p className='start'>0:00</p>
                    </div>
                    <div className='end'>
                    <p className='end'>0:00</p>
                    </div>
                </div>
                <div className='line'>
                    <div className='lineChild'></div>
                </div>
            </div>
            <div className='msc center'>
                <div className='ctrl center' onClick={backward}>
                <FaBackward />
                </div>
                <div  className='ctrl center' id='playing'>
                <FaPlay />
                <FaPause className='none'/>
                </div>
                <div className='ctrl center' onClick={forward}>
                    <FaForward/>
                </div>
                <audio src="" className=''></audio>
            </div>
        </div>
    </div>
  )
}

export default MusicPlayer