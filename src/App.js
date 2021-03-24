import Registration from './component/Registration'
import Login from './component/login'
import {Route} from 'react-router-dom'
import HomeScreen from './component/homeScreen'
import Navbar from './component/navbar'
import './App.css';

function App() {
  return (
    <>
    <Navbar />
    <Route path="https://605b5daab037b1777f9ff21d--pedantic-allen-916df9.netlify.app//register" component={Registration} />
    <Route path="https://605b5daab037b1777f9ff21d--pedantic-allen-916df9.netlify.app//login" component={Login} />
    <Route path='https://605b5daab037b1777f9ff21d--pedantic-allen-916df9.netlify.app//homeScreen' component={HomeScreen} />
    </>
  );
}

export default App;
