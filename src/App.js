import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
    </BrowserRouter>
  );
};

export default App;
