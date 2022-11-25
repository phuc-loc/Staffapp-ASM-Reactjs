import React from 'react';
import './App.css';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/ConfigureStore'
import { Component } from 'react';

const store = ConfigureStore();

class App extends Component {
  render(){
  return (
    <Provider store={store} >
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
  );
  }
}

export default App;
