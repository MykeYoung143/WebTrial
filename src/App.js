import './App.css';
import {Switch,Route} from 'react-router-dom';
import Login from './Pages/Login/Login';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path='/' component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
