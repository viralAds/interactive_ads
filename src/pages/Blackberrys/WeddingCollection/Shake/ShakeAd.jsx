import React, { useEffect, useState } from 'react'
import './Shake.scss';
import Shake from 'shake.js';

const ShakeAd = () => {

    const [ isActive, setIsActive ] = useState(false)

    useEffect(() => {
        let myShakeEvent = new Shake({
            threshold: 15, // optional shake strength threshold
            timeout: 1000 // optional, determines the frequency of event generation
        });
        myShakeEvent.start();
        window.addEventListener('shake', shakeEventDidOccur, false);
    })
    
    const shakeEventDidOccur = () => {
        setIsActive(true)
        //put your own code here etc.
        alert('shake!');
    }

    return (
        <div>
            <h1>hi</h1>
            { isActive && 
                <div><h1>Shaked</h1></div>
            }
        </div>
    )
}

export default ShakeAd
