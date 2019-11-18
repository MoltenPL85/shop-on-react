import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
    this.unsubscribeFromAuth = undefined;
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ currentUser: user });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth && this.unsubscribeFromAuth();
    this.unsubscribeFromAuth = undefined;
  }

  signOut = () => {
    this.setState({ currentUser: null });
  };

  render() {
    return (
      <div>
        <Router>
          <Header currentUser={this.state.currentUser} signOut={this.signOut} />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={SignInAndSignUpPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
