import './App.css';
import { useState, useEffect } from 'react';

import { Routes, Route } from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component';
import Register from './routes/register/register.component';
import Login from './routes/log-in/log-in.component';
import Store from './routes/store/store.component';
import Checkout from './routes/checkout/checkout.component';
import Home from './routes/home/home.component';
import Support from './routes/support/support.component';

import Loader from './components/loader/loader.component';


function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (

    <>
      {isLoading ? <Loader /> :
        <Routes>
          <Route path='/' element={<Navigation />}>

            <Route index element={<Home />} />
            <Route path='store/*' element={<Store />} />
            <Route path='support' element={<Support />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='checkout' element={<Checkout />} />

          </Route>
        </Routes>
      }
    </>

  );
}

export default App;
