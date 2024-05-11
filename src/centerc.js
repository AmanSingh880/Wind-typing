import React, {useState} from 'react'
import Timer from './Timer.js';

export default function TextForm(props) {
    const [Text,setText]=useState("");
  return (
    <>
    <Timer />
    <div className="Container myclass"  >
        <textarea className={`form-control bg-dark`} data-bs-theme="dark" id="mybox" rows="8" value={Text} placeholder='Enter the text' ></textarea>
    </div>
    </>
  )
}
