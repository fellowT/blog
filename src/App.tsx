import React from 'react';
import './styles/index.scss';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/header/index'
const App: React.FC = (): any => {
  return (
    <div className="App">
      <Router>
        <Header/>
      </Router>
    </div>
  );
}

export default App;
