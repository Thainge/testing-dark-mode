import React from 'react';
import './navigation.css';

const Navigation = () => {
  return (
        <div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#channels">Channels</a></li>
            <li><a href="#addchannels">Add Channels</a></li>
            <li className="floatRight"><a href="#signin">Sign In</a></li>
          </ul>
        </div>
  );
}

export default Navigation;