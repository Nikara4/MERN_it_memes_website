import { Heading, Image, Box } from '@chakra-ui/react';

const Picture = props => {
  return (
    <Box boxSize="lg" className="form--picture">
      <Heading as="h4" size="lg">
        {props.memeTopText}
      </Heading>
      <Image src={props.memeImg} alt="" />
      <Heading as="h4" size="lg">
        {props.memeBottomText}
      </Heading>
    </Box>
  );
};

export default Picture;
