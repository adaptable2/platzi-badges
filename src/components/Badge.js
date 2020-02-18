import React from 'react';
import Gravatar from './Gravatar';
import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header col-12">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <Gravatar
            className="Badge__avatar"
            email={this.props.email}
          />
          <h1>
            {this.props.first_name} <br /> {this.props.last_name}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{this.props.jobtitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>

        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
