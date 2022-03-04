import { Box, useColorModeValue } from '@chakra-ui/react';
import HomePage from '../components/HomePage';
import Navbar from '../components/NavBar';

export default function Home() {
  return (
    <Box
      bgGradient={useColorModeValue(
        'linear(to-tl, #29539b, #a6e7ff, gray.100)',
        'linear(to-tr, #29539b, gray.900)'
      )}
    >
      <Navbar />
      <HomePage />
    </Box>
  );
}
