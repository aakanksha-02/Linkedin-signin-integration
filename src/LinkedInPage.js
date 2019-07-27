import React, { Component } from 'react';

import { LinkedIn } from 'react-linkedin-login-oauth2';

class LinkedInPage extends Component {
  state = {
    code: '',
    errorMessage: '',
  };


  handleSuccess = (data) => {
    console.log('success: '+ JSON.stringify(data));
    this.setState({
      code: data.code,
      errorMessage: '',
    });
  }

  handleFailure = (error) => {
    console.log('failure: '+ error);
    this.setState({
      code: '',
      errorMessage: error.errorMessage,
    });
  }
  
  fetchLinkedinDetails = () => {
    fetch(`https://api.linkedin.com/v2/code=${this.state.code}`)
        .then(res => res.json())
        .then((data) => {
          console.log(JSON.stringify(data));
        })
        .catch(console.log);
  }

  render() {
    const { code, errorMessage } = this.state;
    return (
      <div>
        <LinkedIn
          clientId="810zmjvskhefw0"
          onFailure={this.handleFailure}
          onSuccess={this.handleSuccess}
          redirectUri="http://localhost:3000/linkedin"
          scope="r_liteprofile r_emailaddress w_member_social"
        >
          <img src={require('./assets/linkedin.png')} alt="Log in with Linked In" style={{ maxWidth: '180px' }} />
        </LinkedIn>
        {!code && <div>No code</div>}
        {code && <div>Code: {code}</div>}
        {errorMessage && <div>{errorMessage}</div>}
        <button onClick={this.fetchLinkedinDetails} >Get Linkedin Details</button>
      </div>
    );
  }
}

export default LinkedInPage;