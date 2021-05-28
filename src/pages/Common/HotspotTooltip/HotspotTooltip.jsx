import React from 'react'
import { Card, CardText, CardBody } from 'reactstrap';
import '../Hotspot/Hotspot.scss';

const HotspotTooltip = (props) => {
    return (
        <div> 
            <Card style={{
                width: '250px'
            }}>
                <CardBody style={{
                    backgroundColor: 'black'
                }}>
                    <CardText>
                        <span className="pop-title" style={{
                            color:' #fff',
                            fontSize: '18px!important'
                        }}>{ props.title }</span><br/>
                        <span className="pop-desc"
                        style={{
                            "--fontSize": '14px',
                            "--Color": 'white'
                        }}>{ props.desc1 }</span>
                        <span className="pop-desc">{ props.desc2 }</span>
                        <span className="pop-desc">{ props.desc3 }</span>
                        <span className="pop-desc">{ props.desc4 }</span>
                        <span className="pop-desc">{ props.desc5 }</span>
                    </CardText>
                </CardBody>
            </Card>  
        </div>
    )
}

export default HotspotTooltip
