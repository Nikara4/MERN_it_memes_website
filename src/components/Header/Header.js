import { Heading, Text, Container } from '@chakra-ui/react';

const Header = () => {
  return (
    <Container className="header" maxW="container.xl">
      <Heading as="h2" size="2xl" className="header--heading">
        Random Meme Generator
      </Heading>
      <Text fontSize="xl" className="header--text">
        Add your own captions to random meme that generates!
      </Text>
    </Container>
  );
};

export default Header;
