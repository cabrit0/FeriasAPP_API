import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Home from './pages/Home';
//import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider>
      <Box width={'100%'} height={'100vh'} p={8} bgColor={'#191B18'} >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;
