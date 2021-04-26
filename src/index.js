import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './pages/App/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'video.js/dist/video-js.css';
import "video-react/dist/video-react.css";

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);