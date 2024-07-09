import { Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import MenuScreen from './screens/MenuScreen';
import BookingPage from './screens/BookingPage';
import OrderScreen from './screens/OrderScreen';
import LoginScreen from './screens/LoginScreen';

import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './helpers/ScrollToTop';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { AlertProvider } from './helpers/alertContext';
import Alert from "./helpers/Alert";

const theme = extendTheme({
  fonts: {
    heading: `'Markazi Text', sans-serif`,
    body: `'Karla', sans-serif`,
  },
})

function App() {
  return (
    <BrowserRouter >
      <ScrollToTop />
      <ChakraProvider theme={theme}>
        <AlertProvider>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/about' element={<AboutScreen />} />
            <Route path='/menu' element={<MenuScreen />} />
            <Route path='/reserve' element={<BookingPage />} />
            <Route path='/order' element={<OrderScreen />} />
            <Route path='/login' element={<LoginScreen />} />
          </Routes>
          <Alert />
        </AlertProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
