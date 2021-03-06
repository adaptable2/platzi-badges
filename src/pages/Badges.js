import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import Navbar from '../components/Navbar';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import api from '../api';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

class Badges extends React.Component {
  state = {
    loading : true,
    error: null,
    data: undefined
  };

componentDidMount(){
  this.fetchData()
}

fetchData = async () => {
  this.setState({ loading: true, error: null })

  try{
    const data = await api.badges.list();

    this.setState({ loading: false, data: data })
  } catch (error){
    this.setState({ loading: false, error: error })
  }
}

  render() {
    if(this.state.loading === true){
      return <PageLoading/>;
    }

    if(this.state.error){
      return <PageError error={this.state.error}/>;
    }
    
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img src={confLogo}/>
            </div>  
          </div>
        </div>
        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              Nuevo Badge
            </Link>
          </div>
          <div className="Badges__list">
            <div className="Badges__container BadgesList">
              <BadgesList badge={this.state.data} />
              {console.log(this.state.data)}
            </div>
          </div>
        </div>
        </React.Fragment>
    );
  }

}

export default Badges;