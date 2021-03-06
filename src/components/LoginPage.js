import React from 'react';
import DocumentTitle from 'react-document-title';

import { LoginForm } from 'react-stormpath';
import Header from '../parts/Header';

export default class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="menu-fixed"></div>
        <div className="header-account-page">
          <h3 className="wow fadeInUp">Sign In</h3>
        </div>
        <DocumentTitle title={`Login`}>
          <div className="container">
            <LoginForm />
          </div>
        </DocumentTitle>
      </div>
    );
  }
}
