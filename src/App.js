
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Principal12 from './Pages/Principal12';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact>
          <Principal12 />
        </Route>
      </Switch>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;
