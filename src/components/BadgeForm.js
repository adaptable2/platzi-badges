import React from 'react';

class BadgeForm extends React.Component {
  state = {}
  handleClick = e => {
    console.log('como seria');
  }
  // handleSubmit = e =>{
  //   e.preventDefault();
  // } 
  render() {
    return ( 
      <div>
        <h1>Nex attendant</h1>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>
              First Name
            </label>
            <input 
              onChange={this.props.onChange}
              value={this.props.formValues.first_name} 
              type="text" 
              name="first_name" 
              className="form-control"
             />
          </div>
          <div className="form-group">
            <label>
              Last Name
            </label>
            <input 
              onChange={this.props.onChange}
              value={this.props.formValues.last_name} 
              type="text" 
              name="last_name" 
              className="form-control"
             />
          </div>
          <div className="form-group">
            <label>
              Email
            </label>
            <input 
              onChange={this.props.onChange}
              value={this.props.formValues.email} 
              type="email" 
              name="email" 
              className="form-control"
             />
          </div>
          <div className="form-group">
            <label>
              Job title
            </label>
            <input 
              onChange={this.props.onChange}
              value={this.props.formValues.jobtitle} 
              type="text" 
              name="jobtitle" 
              className="form-control"
             />
          </div>
          <div className="form-group">
            <label>
              Twitter
            </label>
            <input 
              onChange={this.props.onChange}
              value={this.props.formValues.twitter} 
              type="text" 
              name="twitter" 
              className="form-control"
             />
          </div>
            <button onClick={this.handleClick}  className="btn btn-primary">Save</button>
            {this.props.error && (<p className="text-danger">
              {this.props.error.message}
            </p>)}
        </form>
      </div>
    );
  }
}

export default BadgeForm;
