import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
import platziconfLogoImage from '../images/platziconf-logo.svg';
import astronautsImage from '../images/astronauts.svg';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row justify-content-center">
          <div className="Home__col d-md-block col-md-12 text-center">
              <img
                src={astronautsImage}
                alt="Astronauts"
                className="img-fluid p-4 w-100"
              />
            </div>
            <div className="Home__col col-12 col-md-5 align-items-center">
              <img
                src={platziconfLogoImage}
                alt="Platzi Conf Logo"
                className="img-fluid mb-2"
              />

              <h1>Badge Management System</h1>
              <Link className="mt-5 btn btn-primary" to="/badges">
                Start
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
