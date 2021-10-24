import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'react-bootstrap';

import { SubmitHandler, FormProvider, useForm } from 'react-hook-form';
import { SchemaOf, string, object } from 'yup';
import { TextFieldContainer } from 'components/Form/TextField/TextField';

interface IFormProps {
  message: string;
  fname: string;
  lname: string;
  email: string;
  phone: string;
  address1: string;
  address2: string;
}
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const formSchema: SchemaOf<IFormProps> = object({
  message: string().required('Message is required'),
  fname: string().required('First Name is required'),
  lname: string().required('Last Name is required'),
  email: string().required('Email is required').email(),
  phone: string().required('Phone is required').matches(phoneRegExp, 'Phone number is not valid'),
  address1: string().required('Address is required'),
  address2: string().required('Address is required'),
});

const FormProviderPage = () => {
  const methods = useForm<IFormProps>({
    resolver: yupResolver(formSchema),
  });

  const submitRecipe: SubmitHandler<IFormProps> = async (data: IFormProps) => {
    console.log('Data submitted ', data);
  };

  return (
    <div className="container">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(submitRecipe)}>
          <TextFieldContainer label="First Name" name="fname" placeholder="First Name" />
          <TextFieldContainer label="Last Name" name="lname" placeholder="Last Name" />
          <TextFieldContainer label="Email" name="email" placeholder="Email" />
          <TextFieldContainer label="Phone" name="phone" placeholder="Phone Number" />
          <TextFieldContainer label="Address Line 1" name="address1" placeholder="Address Line 1" />
          <TextFieldContainer label="Address Line 2" name="address2" placeholder="Address Line 2" />
          <TextFieldContainer label="Message" name="message" placeholder="Message" />
          <Button color="primary" type="submit">
            Submit
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default FormProviderPage;
