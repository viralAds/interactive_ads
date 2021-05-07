import React from 'react'
import { UncontrolledCollapse } from 'reactstrap';
import './Hotspot.scss';
import HotspotTootip from './HotspotTooltip';

const Hotspot = (props) => {
    console.log("props",props)
    return (
        <div>
            <div className="hotspot"
                style={{ top: props.toppos, left: props.leftpos }}>
                <div className="outer-circle"></div>
                <div id={props.id} className="inner-circle" ></div>
            </div>
            <UncontrolledCollapse toggler={'#'+ props.id} className="hot-collapse"
                style={{"--topPos": props.toppos, "--leftPos": props.leftpos}}>
                <HotspotTootip title={ props.details.title } desc={props.details.desc} />
            </UncontrolledCollapse>
        </div>
    )
}

export default Hotspot