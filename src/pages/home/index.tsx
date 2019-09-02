import React, { Component } from 'react';
import './index.scss'
const avatar = require("../../assets/images/avatar.jpeg")
const github = require("../../assets/images/github.png")
const juejing = require("../../assets/images/juejing.png")
class Home extends Component {
  public render() {
    return (
      <div className="home">
        <div className="personal">
          <div className="personal-content">
            <img className="avatar" src={avatar} alt=""/>
            <h1>蜡笔小新coder</h1>
            <p className="address">广东广州</p>
            <div className="blog-icon">
              <a href="https://github.com/fellowT" rel='noreferrer noopener' target="_blank">
                <img src={github} alt=""/>
              </a>
              <a href="https://juejin.im/user/5c2334b66fb9a049af6d4dad" rel='noreferrer noopener' target="_blank">
                <img src={juejing} alt=""/>
              </a>
            </div>
          </div>
          <div className="personal-footer">
            <span className="download-btn">Download Resume</span>
          </div>
        </div>
        <div className="home-container">
          <div className="home-wrap">
            <div className="home-wrap-bar"></div>
            <div className="home-wrap-content">
              <div className="wrap-title">about me</div>
              <p className="introduction">
                <b>hello,我是蜡笔小新coder</b><br/>
                目前就职于广州某互联网公司，两年前端开发工作经验，主要技术栈vue全家桶、react、Typescript、nodejs、webpack,扎实的javascript基础。
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;