import React from 'react';
import { Form } from 'react-bootstrap';

interface Props {
  placeholder: string;
  options: string[];
  onChange: Function;
}

export const Select = (props: Props) => {
  const { options, onChange } = props;
  const onChangeHandler = (event: any) => {
    onChange(event.target.value);
  };

  return (
    <Form.Select aria-label="" defaultValue="All" onChange={onChangeHandler}>
      {options.map((option: string, index: number) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </Form.Select>
  );
};
