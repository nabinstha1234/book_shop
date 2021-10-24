import React from 'react';
import FormProvider from 'providers/fromProvider';

interface Props {}

export const Checkout = (props: Props) => {
  return (
    <div className="container">
      <FormProvider />
    </div>
  );
};
