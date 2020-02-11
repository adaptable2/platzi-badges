import React from 'react';
import Navbar from '../components/Navbar';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import './styles/BadgeNew.css';
class BadgeNew extends React.Component {
  state = {
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
              <Badge 
                first_name={this.state.form.first_name}
                last_name={this.state.form.last_name}
                email={this.state.form.email}
                twitter={this.state.form.twitter}
                jobtitle={this.state.form.jobtitle}
                urlAvatar="https://i.picsum.photos/id/679/100/100.jpg"
              />
            </div>
            <div className="col-6">
              <BadgeForm onChange={this.handleChange} formValues={this.state.form} />
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default BadgeNew;
