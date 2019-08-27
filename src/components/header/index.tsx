import './index.scss';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import routes from '../../router/index'
import './index.scss'

class Header extends Component {
  public render() {
    const routerNav = routes.map((route,index) => {
      if(route.exact){
        return <li className="nav-item" key={index}><NavLink exact to={route.path}>{route.name}</NavLink></li>
      }else{
        return <li className="nav-item" key={index}><NavLink  to={route.path}>{route.name}</NavLink></li>
      }
    })
    return (
      <div className="header">
        <div className="logo">.Coder</div>
        <ul className="nav">
          {routerNav}
        </ul>
      </div>
    );
  }
}


export default Header;