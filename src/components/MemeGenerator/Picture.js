import { Heading, Image, Box } from '@chakra-ui/react';

const Picture = props => {
  return (
    <Box boxSize="lg" className="form--meme">
      <div>
        <Heading as="h4" size="xl" className="picture--heading__top">
          {props.memeTopText}
        </Heading>
      </div>
      <Image src={props.memeImg} alt="" className="form--picture" />
      <div>
        <Heading as="h4" size="xl" className="picture--heading__bottom">
          {props.memeBottomText}
        </Heading>
      </div>
    </Box>
  );
};

export default Picture;
