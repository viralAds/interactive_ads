import React from 'react'
import { Card, CardText, CardBody } from 'reactstrap';
import '../Hotspot/Hotspot.scss';

const HotspotTooltip = (props) => {
    return (
        <div> 
            <Card>
                <CardBody>
                    <CardText>
                        <span className="pop-title">{ props.title }</span><br/>
                        
                    </CardText>
                    <pre className="pop-desc">{ props.desc }</pre>
                </CardBody>
            </Card>  
        </div>
    )
}

export default HotspotTooltip
