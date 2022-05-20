import { Container } from '@mui/material';
import { NextPage } from 'next';

import { Text } from '../styles/globalComponents';

const About: NextPage = () => {
  return (
    <Container maxWidth='lg'>
      <div>
        <h1>About the creator</h1>
        <Text>
          Hello my fellow memes fan. I am a Junior Web Developer aspiring to
          grow my skills and become better. And I love memes, especially those
          from IT. Hence this website was created. This is one of my biggest
          projects yet and I intend to add more to it when I get to know, how.
          For now, you can either scroll through the memes anonymously or create
          an account and like/dislike or add new memes.
        </Text>
        <Text>
          If you would like to know what I have planned for this site or simply
          what to check out my code, visit the GitHub repository:{' '}
          <a href='https://github.com/Nikara4/MERN_it_memes_website/'>
            MERN_it_memes_website
          </a>
          . Should you have any ideas, on how to build this site or want to let
          me know what to code better, feel free to contact me.
        </Text>
        <Text>
          <a href='https://github.com/Nikara4/MERN_it_memes_website/'>
            Portfolio
          </a>{' '}
          /{' '}
          <a href='https://www.linkedin.com/in/aleksandra-szczur/'>LinkedIn</a>{' '}
          / <a href='https://github.com/Nikara4/'>GitHub</a>
        </Text>
        <Text>
          Email:{' '}
          <a href='mailto:olaszczur93@gmail.com'>olaszczur93@gmail.com</a>
        </Text>
      </div>
    </Container>
  );
};

export default About;
