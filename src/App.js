import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './component/dashboard/Dashboard.js';
import ItemCreateForm from './components/ItemCreateForm';

class App extends Component {
    render() {
      return (
        <div className="App">
          <Provider store={store}>
            <BrowserRouter>
            <React.Fragment>
              <Route path="/" component={Dashboard} />
              <Route path="/category" component={ItemCreateForm} />
            </React.Fragment>
            </BrowserRouter>
          </Provider>
        </div>
      );
    }
  }
  