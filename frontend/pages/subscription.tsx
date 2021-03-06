import { Container } from '@mui/material';
import { NextPage } from 'next';
import Head from 'next/head';

import { Text } from '../styles/globalComponents';

const Subscription: NextPage = () => {
  return (
    <>
      <Head>
        <title>Subscription | IT Memes World</title>
      </Head>
      <Container maxWidth='lg'>
        <div>
          <h1>IT Memes - Subscription</h1>
          <Text>
            There is an idea to open a subscription for those, who are always
            hungry for new memes. It will send a weekly email with newest
            uploads. This is under development and will be available soon.
          </Text>
        </div>
      </Container>
    </>
  );
};

export default Subscription;
