
import './App.css';

//components
import Home from './pages/Home';
import Catogerymovies from './pages/Catogerymovies';

import { routhPath } from './constants/Route';

import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path={routhPath.home} element ={<Home/>}/>
        <Route path ={routhPath.Categories} element ={<Catogerymovies/>}/>
        <Route path ={routhPath.invalid} element ={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
