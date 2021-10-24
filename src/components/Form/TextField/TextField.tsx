import React from 'react';
import { useFormContext } from 'react-hook-form';
import TextFieldMemo from './TextFieldMemo';

interface ReactHookFormTextFieldContainerProps {
  name: string;
  label?: string;
  placeholder: string;
}

export const TextFieldContainer = ({
  name,
  label,
  placeholder,
}: ReactHookFormTextFieldContainerProps) => {
  const methods = useFormContext();
  return <TextFieldMemo methods={methods} label={label} name={name} placeholder={placeholder} />;
};
