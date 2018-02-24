import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom';
//import components
import Home from './Components/home';
import Post from './Components/post';
import Dashboard from './Components/dashboard';
import PostItem from './Components/post-item';


const App = ()=>{
    return(
        <BrowserRouter>

        <div>
            <header>
            <NavLink to="/">Home</NavLink> <br/>
            <NavLink to ="/post">Post</NavLink> <br/>
            <NavLink to ={{
                pathname:'/dashboard',
            }}>Dashboard</NavLink>
            <hr/>
            
            </header>
            <Switch>
           
           <Route path ="/post/:id/:username" component ={PostItem} />
           <Route path = "/dashboard" component={Dashboard}/>
           <Route path ="/post" exact component ={Post}/>
           <Route path="/" exact component={Home}/>
           <Route render ={()=><h3>404 error</h3>}/>

           </Switch>
        </div>
        </BrowserRouter>
    );
}

ReactDOM.render(<App/>, document.querySelector('#root'));