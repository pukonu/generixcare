import React, { FunctionComponent } from 'react';
import { Formik, FormikHelpers, Form } from 'formik';
import { object, string, boolean } from 'yup';

import { Button, Checkbox, SelectField, TextField } from 'src/components';
import { SelectOption } from 'src/interfaces';

interface FormData {
  checkbox: boolean;
  select: string;
  email: string;
}

const initialValues = {
  checkbox: false,
  select: '',
  email: ''
};

export const selectData: SelectOption[] = [
  { value: 'Option1', label: 'Option1' },
  { value: 'Option2', label: 'Option2' }
];

const validationSchema = object().shape({
  checkbox: boolean().required(),
  select: string().required(),
  email: string().email().required()
});

const ApplicationForm: FunctionComponent = () => {
  const onSubmit = async (values: FormData, actions: FormikHelpers<FormData>) => {
    console.log(values);
    actions.setSubmitting(false);
  };

  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
      {({ isSubmitting }) => (
        <Form className="flex flex-wrap sm:-mx-2">
          <TextField
            id="email"
            name="email"
            placeholder="E-mail"
            className="w-full sm:w-1/2 mb-8 sm:px-2"
          />

          <SelectField
            name="select"
            options={selectData}
            placeholder="Select Input"
            className="w-full sm:w-1/2 mb-8 sm:px-2"
          />

          <Checkbox
            name="checkbox"
            label="Checkbox Input"
            className="w-full sm:w-1/2 mb-8 sm:px-2"
          />

          <div className="w-full">
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ApplicationForm;
