import { Container } from '@mui/material';
import { NextPage } from 'next';

import { Text } from '../styles/globalComponents';

const GenerateMeme: NextPage = () => {
  return (
    <Container maxWidth='lg'>
      <div>
        <h1>IT meme generator</h1>
        <Text>
          For now there is nothing to be found here, but do not worry. I intend
          to create a meme generator which will allow you to make your own funny
          picture and upload it to the website (if you want it).
        </Text>
      </div>
    </Container>
  );
};

export default GenerateMeme;
