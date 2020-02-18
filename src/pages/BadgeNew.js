import React from 'react';
import Navbar from '../components/Navbar';
import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading'
import api from '../api';

import './styles/BadgeNew.css';
class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      first_name: '',
      last_name: '',
      email: '',
      jobtitle: '',
      twitter: ''
    }
  }
  handleChange = e => {
    // forma uno de pasar los parametros
    // const nextForm = this.state.form;
    // nextForm[e.target.name] = e.target.value;
    // this.setState({
    //   form: nextForm
    this.setState({
      form: {
        ... this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }
  handleSubmit = async e => {
    e.preventDefault();
    this.setState({loading: true, error: null})

    try {

      await api.badges.create(this.state.form)

      this.setState({loading: false})
      this.props.history.push('/badges');
    } catch (error){

      this.setState({loading: false, error : error})
    }
  }
  render() {
    if( this.state.loading){
      return <PageLoading/>
    }
    return (
      <React.Fragment>
        <div className="BadgeNew__hero text-center">
          <img src={header} className="BadgeNew__hero-image image-fluid"/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Badge 
                first_name={this.state.form.first_name || 'First_Name'}
                last_name={this.state.form.last_name || 'Last_name'}
                email={this.state.form.email || 'jccastaneda82@@misena.edu.co'}
                twitter={this.state.form.twitter || 'Twitter'}
                jobtitle={this.state.form.jobtitle || 'Job_title'}
                urlAvatar="https://i.picsum.photos/id/679/100/100.jpg"
              />
            </div>
            <div className="col-md-6 mt-5 mt-md-0 pb-5">
              <BadgeForm 
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form} 
                error={this.state.error} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
