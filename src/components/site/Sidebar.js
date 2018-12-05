import React from 'react'

import {
    Route,
    Link,
    Switch
} from 'react-router-dom'

import Home from './Home'
import Resources from './Resources'
import FunctionalComponentDemo from '../concepts/FunctionalComponentDemo'
import JSXRules from '../concepts/JSXRules'
import ClassComponentDemo from '../ClassComponentDemo'
import PropsDemo from '../concepts/PropsDemo';
import LifeCycleCodepen from '../concepts/LifeCycleCodepen';
import Clock from '../walkthrough/Clock';
import TimePiecesApp from '../apps/timer-apps/TimePiecesApp';
import NytApp from '../apps/nyt-app/NytApp';

const Sidebar = () => (

    <div className="sidebar"> 
        <div className="sidebar-list list-unstyled">
            <ul className="sidebar-list list-unstyled">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/rationale">Rationale</Link></li>
                <li><Link to="/functionalcomponent">Functional Component</Link></li>
                <li><Link to="/jsxrules">JSX Rules</Link></li>
                <li><Link to ="/classcomponentdemo">Class Component Demo</Link></li>
                <li><Link to="/propsdemo">Props Demo</Link></li>
                <li><Link to="/lifecyclecodepen">Life Cycle Codepen</Link></li>
                <li><Link to="/timer">Time Pieces App</Link> </li>
                <li><Link to="/clock">Clock</Link></li>
                <li><Link to="/nytapp">NYT App</Link></li>
                <li><Link to="/resources">Resources</Link></li>


            </ul>
        </div>
        <div className="sidebar-route">
            <Switch>
                <Route exact path="/home"><Home /></Route>
                <Route exact path="/resources"><Resources /></Route>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/functionalcomponent"><FunctionalComponentDemo /></Route>
                <Route exact path="/jsxrules"><JSXRules /></Route>
                <Route excat path="/classcomponentdemo"><ClassComponentDemo /></Route>
                <Route excat path="/propsdemo"><PropsDemo /></Route>
                <Route excat path="/lifecyclecodepen"><LifeCycleCodepen /></Route>
                <Route excat path="/clock"><Clock /></Route>
                <Route excat path="/timer"><TimePiecesApp /></Route>
                <Route excat path="/nytapp"><NytApp /></Route>
            </Switch>
        </div>
    </div>

)

export default Sidebar;