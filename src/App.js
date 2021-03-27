import Registration from './component/Registration'
import Login from './component/login'
import {Route} from 'react-router-dom'
import HomeScreen from './component/homeScreen'
// import Navbar from './component/navbar'
import './App.css';

function App() {
  return (
    <>
    {/* <Navbar /> */}
    <Route path="/register" component={Registration} />
    <Route path="/login" component={Login} />
    <Route path='/homeScreen' component={HomeScreen} />
    </>
  );
}

export default App;
