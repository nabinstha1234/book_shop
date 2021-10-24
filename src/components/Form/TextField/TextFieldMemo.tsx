import { memo } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Form } from 'react-bootstrap';

interface IReactHookFormTextFieldMemoProps {
  label: string | undefined;
  methods: UseFormReturn;
  name: any;
  placeholder: string;
}

const TextFieldMemo = memo(
  ({ label, methods, name, placeholder }: IReactHookFormTextFieldMemoProps) => (
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>{label}</Form.Label>
      <Form.Control type="text" placeholder={placeholder} {...methods.register(name)} />
      {!!methods.formState.errors.message && (
        <p className="text-danger">{methods.formState.errors.message?.message ?? ''}</p>
      )}
    </Form.Group>
  ),
  (prevProps, nextProps) => {
    return (
      prevProps.methods.formState.isDirty === nextProps.methods.formState.isDirty &&
      prevProps.methods.formState.errors !== nextProps.methods.formState.errors
    );
  }
);

export default TextFieldMemo;
