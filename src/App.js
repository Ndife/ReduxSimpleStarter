import React, { Component } from 'react';
import ShoppingList from './components/ShoppingList';
import Modals from './components/Modals';
import './App.css'

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {

  render() {
    return (
     <Provider store ={store}>
      <Modals/>
      <ShoppingList />
   </Provider>
    );
  }
}

export default App;
