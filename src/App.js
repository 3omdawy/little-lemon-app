import { Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import MenuScreen from './screens/MenuScreen';
import ReserveScreen from './screens/ReserveScreen';
import OrderScreen from './screens/OrderScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeScreen />} />
      <Route path='/about' element={<AboutScreen />} />
      <Route path='/menu' element={<MenuScreen />} />
      <Route path='/reserve' element={<ReserveScreen />} />
      <Route path='/order' element={<OrderScreen />} />
      <Route path='/login' element={<LoginScreen />} />
    </Routes>
  );
}

export default App;
