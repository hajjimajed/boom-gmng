import './App.css';

import { Routes, Route } from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component';
import Register from './routes/register/register.component';
import Login from './routes/log-in/log-in.component';
import Store from './routes/store/store.component';
import Checkout from './routes/checkout/checkout.component';
import Home from './routes/home/home.component';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>

        <Route index element={<Home />} />
        <Route path='store/*' element={<Store />} />
        <Route path='news' />
        <Route path='support' />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='checkout' element={<Checkout />} />

      </Route>
    </Routes>
  );
}

export default App;
