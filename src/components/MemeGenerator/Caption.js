import { Input } from '@chakra-ui/react';

const Caption = props => {
  return (
    <div className="form--input">
      <Input
        size="md"
        variant="outline"
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
