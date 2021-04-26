import React from 'react'
import {
    UncontrolledCollapse, Card,
    CardText, CardBody, CardTitle } from 'reactstrap';
import './Play.scss';

const Hotspot = (props) => {
    console.log("props",props)
    return (
        <div>
        <div className="hotspot"
            style={{ "--topPos": props.toppos, "--leftPos": props.leftpos }}>
            <div className="outer-circle"></div>
            <div id={props.id} className="inner-circle" ></div>
        </div>
        <UncontrolledCollapse toggler={'#'+ props.id} className="hot-collapse"
            style={{"--topPos": props.toppos, "--leftPos": props.leftpos }}>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">
                        <a href="" target="_blank" rel="noreferrer">{ props.details.title }</a>
                    </CardTitle>
                    <CardText>{ props.details.desc }</CardText>
                </CardBody>
            </Card>
        </UncontrolledCollapse>
        </div>
    )
}

export default Hotspot