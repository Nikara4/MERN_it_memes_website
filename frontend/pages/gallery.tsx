import { Container } from '@mui/material';
import { NextPage } from 'next';

import { Text } from '../styles/globalComponents';

const Gallery: NextPage = () => {
  return (
    <Container maxWidth='lg'>
      <div>
        <h1>IT Memes Gallery</h1>
        <Text>
          This page will show all memes ever uploaded to the site in one place,
          as a gallery.
        </Text>
      </div>
    </Container>
  );
};

export default Gallery;
