import React from 'react';
import './Swap.scss';
import ReactPlayer from 'react-player/lazy'

export default class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      Url: ""
    }
  }
 
  componentDidMount(){
    this.setState(() => ({
      Url: "https://www.youtube.com/watch?v=ysz5S6PUM-U"
    }))
  }

  changeVideo = (url) => {
    this.setState(() => ({ Url: url }))
  };

  render() {
    return (
      <div className="swap-video">
        <div className="video-cnt">
          <ReactPlayer url={this.state.Url} controls={true} playing={true}  width='100%'
          height='100%' />
        </div>
        <div className="btns">
          <button onClick={ (e) => {
            this.changeVideo('https://www.youtube.com/watch?v=ysz5S6PUM-U');
          }}>One</button>
          <button onClick={ (e) => {
            this.changeVideo('https://www.youtube.com/watch?v=EFkRxl3sRzA');
          }}>Two</button>
          <button onClick={ (e) => {
            this.changeVideo('https://www.youtube.com/watch?v=n4IhCSMkADc');
          }}>Three</button>
          <button onClick={ (e) => {
            this.changeVideo('https://www.youtube.com/watch?v=6v2L2UGZJAM');
          }}>Four</button>
        </div>
      </div>
    );
  }
}
