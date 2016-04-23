import React from 'react';
import Nav from 'components/Nav';
import { once } from 'lib/utils';
import './style.scss';

const logout = () => {
  localStorage.clear();
  window.location.href = '/';
};

function makeLinks(nav = false) {
  return (
    <div>
      {!nav ? (
        <span>
          <li><a className="dropdown-button" data-beloworigin="true" href="#" data-activates="switch-account">Switch Account ▾</a></li>
          <ul id="switch-account" className="dropdown-content">
            <li><a href="#">Rob Calcroft</a></li>
            <li><a href="#">Dom Tree</a></li>
          </ul>
        </span>
      ) : (
        <li className="no-padding">
          <ul className="collapsible collapsible-accordion">
            <li>
              <a className="collapsible-header">Switch Account ▾</a>
              <div className="collapsible-body">
                <ul>
                  <li><a href="#!">First</a></li>
                  <li><a href="#!">Second</a></li>
                  <li><a href="#!">Third</a></li>
                  <li><a href="#!">Fourth</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </li>
      )}
      <li><a href="http://github.com/robcalcroft/mondoweb">About</a></li>
      <li><a href="http://getmondo.co.uk">Help</a></li>
      <li><a onClick={logout} href="#">Logout</a></li>
    </div>
  );
}

export default class Container extends React.Component {

  constructor() {
    super();

    this.initSideMenu = once(this.initSideMenu);
    this.initDropDown = once(this.initDropDown);
    this.initCollapsible = once(this.initCollapsible);
  }

  componentDidMount() {
    this.initSideMenu();
  }

  initSideMenu() {
    $('.button-collapse').sideNav({
      edge: 'right',
      closeOnClick: true
    });
  }

  initDropDown() {
    $('.dropdown-button').dropdown({
      belowOrigin: true
    });
  }

  initCollapsible() {
    $('.collapsible').collapsible();
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper container--fluid">
          <img src={require('assets/logo_horz_darkbg.png')} className="nav--logo" alt="Mondo logo" />
          <ul className="right hide-on-med-and-down">{makeLinks()}</ul>
          <ul id="slide-out" className="side-nav">
            <img src={require('assets/logo_horz_darkbg.png')} className="nav--logo--menu center" alt="Mondo logo" />
            {makeLinks(true)}
          </ul>
          <a href="#" data-activates="slide-out" className="button-collapse right">
            <span className="nav--mobile-menu">Menu</span>
          </a>
        </div>
      </nav>
    );
  }
}
