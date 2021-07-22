import React from 'react'
import { UncontrolledCollapse } from 'reactstrap';
import './Hotspot.scss';
import HotspotTootip from '../HotspotTooltip/HotspotTooltip';

const Hotspot = (props) => {
    return (
        <div>
            <div className="hotspot"
                style={{ 
                    top: props.toppos + "%" , 
                    left: props.leftpos + "%" 
                }}>
                <div className="outer-circle"></div>
                <div id={props.id} className="inner-circle" ></div>
            </div>
            <UncontrolledCollapse toggler={'#'+ props.id} className="hot-collapse"
                style={{
                    top: (props.toppos + 1) + "%" ,
                    left: (props.leftpos + 1) + "%"
                }}>
                <HotspotTootip 
                    title={ props.details.title } 
                    desc1={ props.details.desc1 }
                    desc2={ props.details.desc2 }
                    desc3={ props.details.desc3 }
                    desc4={ props.details.desc4 }
                    desc5={ props.details.desc5 } />
            </UncontrolledCollapse>
        </div>
    )
}

export default Hotspot