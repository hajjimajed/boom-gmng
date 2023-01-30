import './App.css';

import { Routes, Route } from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>

        <Route index />
        <Route path='store' />
        <Route path='news' />
        <Route path='support' />
        <Route path='login' />
        <Route path='register' />

      </Route>
    </Routes>
  );
}

export default App;
