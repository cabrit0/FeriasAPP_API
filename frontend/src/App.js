import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Home from './pages/Home';
import Register from './pages/Register';
import User from './pages/User';
import Chefia from './pages/Chefia';
import RH from './pages/RH';
import { UserContextProvider } from './context/UserContext';
import { WeatherContextProvider } from './context/WeatherContext';
//import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider>
      <UserContextProvider>
        <WeatherContextProvider>
          <Box width={'100%'} height={'100vh'} p={6} bgColor={'#191B18'}>
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/user/trabalhador" element={<User />} />
                <Route path="/user/chefia" element={<Chefia />} />
                <Route path="/user/rh" element={<RH />} />
              </Routes>
            </Router>
          </Box>
        </WeatherContextProvider>
      </UserContextProvider>
    </ChakraProvider>
  );
}

export default App;
