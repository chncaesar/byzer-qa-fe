import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.tsx'
import './index.css'
import { HashRouter as Router, Route, redirect, Switch } from 'react-router-dom';


// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

ReactDOM.render(
  <Router>
      <Switch>
          <Route path="/admin" component={App}/>          
          {
              mainRoute.map( (route, key)=>{
                  return <Route path={route.pathname} component={route.component} key={key}/>
              })
          }

          <Redirect to='/home' from='/' exact/>
      </Switch>
  </Router>,
  document.getElementById('root')
);