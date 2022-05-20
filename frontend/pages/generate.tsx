import { Container } from '@mui/material';
import { NextPage } from 'next';
import Head from 'next/head';

import { Text } from '../styles/globalComponents';

const GenerateMeme: NextPage = () => {
  return (
    <>
      <Head>
        <title>Generate a Meme | IT Memes World</title>
      </Head>
      <Container maxWidth='lg'>
        <div>
          <h1>IT meme generator</h1>
          <Text>
            For now there is nothing to be found here, but do not worry. I
            intend to create a meme generator which will allow you to make your
            own funny picture and upload it to the website (if you want it).
          </Text>
        </div>
      </Container>
    </>
  );
};

export default GenerateMeme;
