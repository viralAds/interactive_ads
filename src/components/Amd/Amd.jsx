import React, { useState, useEffect } from 'react'
import amd1 from '../../assets/img/amd/1.jpg';
import amd2 from '../../assets/img/amd/2.jpg';
import amd3 from '../../assets/img/amd/3.jpg';
import amd4 from '../../assets/img/amd/4.jpg';
import amd5 from '../../assets/img/amd/5.jpg';
import './Amd.scss';

const items = [
    {
        id: "1",
        img: amd1   
    },
    {
        id: "2",
        img: amd2   
    },
    {
        id: "3",
        img: amd3   
    },
    {
        id: "4",
        img: amd4   
    },
    {
        id: "5",
        img: amd5   
    }
]

const Amd = () => {

    const [imgState, setImgState ] = useState(1)
    const [isMessageActive, setIsMessageActive] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsMessageActive(false)
        }, 2000)
        
        document.getElementsByClassName('indicator')[imgState-1].setAttribute("class", `indicator-${imgState} indicator  active`)
    }, [imgState])


    // set active,  if imgState = indicator-number
    const onPrev = () => {
        if ( imgState === 1 ) {
            return
        }
        setImgState(imgState - 1)
    }

    const onNext = () => {
        if ( imgState === 5 ) {
            return
        }
        setImgState(imgState + 1)
    }

    return (
        <div>
            <div className="amd-wrapper">
                <div className="indicators">
                {
                    items.map(item => {
                        return (
                            <div key={item.id} className={`indicator-${item.id} indicator`}></div>
                        )
                    })
                }
                </div>
                <img src={items[imgState-1].img} alt="amd-img" />
                <div className="prev" onClick={() => onPrev()}></div>                    
                <div className="next" onClick={() => onNext()}></div>
                {isMessageActive && <div className="message"><span>Tap to Skip</span></div>}
            </div>
            
        </div>
    )
}

export default Amd
