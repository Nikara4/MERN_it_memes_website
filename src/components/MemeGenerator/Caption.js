import { Input } from '@chakra-ui/react';

const Caption = props => {
  return (
    <div>
      <Input
        className="form--input"
        size="md"
        variant="flushed"
        type="text"
        name={props.name}
        placeholder={props.placeholder}
        value={props.text}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default Caption;
