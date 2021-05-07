import React from 'react'
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import './Hotspot.scss';

const HotspotTooltip = (props) => {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardText>
                        <span className="pop-title">{ props.title }</span><br/>
                        <span className="pop-desc">{ props.desc }</span>
                    </CardText>
                </CardBody>
            </Card>  
        </div>
    )
}

export default HotspotTooltip
