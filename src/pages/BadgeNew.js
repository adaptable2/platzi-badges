import React from 'react';
import Navbar from '../components/Navbar';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import './styles/BadgeNew.css';
class BadgeNew extends React.Component {
  render() {
    return (
    <div>
        <Navbar/>
        <div className="BadgeNew__hero">
          <img src={header} className="image-fluid"/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge first_name="Camilo" last_name="Castañeda" twitter="adaptable222" jobtitle="Frontend" urlAvatar="https://i.picsum.photos/id/679/100/100.jpg"/>
            </div>
            <div className="col-6">
              
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default BadgeNew;
