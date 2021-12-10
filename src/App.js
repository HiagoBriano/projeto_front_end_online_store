
import './App.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Principal12 from './Pages/Principal12';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact>
          <Principal12 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
