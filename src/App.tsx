import React from 'react';
import './styles/index.scss';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/header/index'
import routes from './router/index'
const App: React.FC = (): any => {
  const routerView = routes.map((route,key) => {
    if(route.exact){
      return <Route key={key} exact path={route.path} component={route.component}/>
    }else{
      return <Route key={key}  path={route.path} component={route.component}/>
    }
  })
  return (
    <div className="App">
      <Router>
        <Header/>
        {routerView}
      </Router> 
    </div>
  );
}

export default App;
