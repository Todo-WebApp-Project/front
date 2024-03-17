import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import RandingPage from './RandingPage.jsx';
import LoginPage from './login/Login.jsx';
import HomePage from './home/Main.jsx';
import { Provider } from 'react-redux';
import store from './store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/' element={<RandingPage/>}/>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
