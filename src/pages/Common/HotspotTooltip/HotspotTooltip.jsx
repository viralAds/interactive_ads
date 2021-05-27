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
                    <pre className="pop-desc">{ props.desc1 }</pre>
                    <pre className="pop-desc">{ props.desc2 }</pre>
                    <pre className="pop-desc">{ props.desc3 }</pre>
                    <pre className="pop-desc">{ props.desc4 }</pre>
                    <pre className="pop-desc">{ props.desc5 }</pre>
                </CardBody>
            </Card>  
        </div>
    )
}

export default HotspotTooltip
