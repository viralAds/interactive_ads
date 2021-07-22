import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'video.js/dist/video-js.css';
import "video-react/dist/video-react.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);