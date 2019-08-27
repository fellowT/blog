import React, { Component } from 'react';
import './index.scss'
const avatar = require("../../assets/images/avatar.jpeg")
class Home extends Component {
  public render() {
    return (
      <div className="home">
        <div className="personal">
          <div className="personal-content">
            <img className="avatar" src={avatar} alt=""/>
            <h1>蜡笔小新coder</h1>
          </div>
          <div className="personal-footer">
          </div>
        </div>
        <div className="home-wrap">

        </div>
      </div>
    );
  }
}

export default Home;