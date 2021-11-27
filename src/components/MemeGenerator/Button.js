import { Button } from '@chakra-ui/react';

const ButtonGenerator = props => {
  return (
    <Button
      className="form--button"
      colorScheme="teal"
      size="lg"
      variant="solid"
      onClick={props.handleClick}
    >
      {props.children}
    </Button>
  );
};

export default ButtonGenerator;
