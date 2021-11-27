import { ChakraProvider, Box, VStack, Grid, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import PageMemeGenerator from './Pages/MemeGenerator';
import Header from './components/Header';
import './styles/styles.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Header />
            <PageMemeGenerator />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
