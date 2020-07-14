/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Field, ErrorMessage } from 'formik';

import { TextFieldProps } from 'src/interfaces';
import { TextFieldWrapper } from './styles';

const TextField: TextFieldProps = ({ name = '', className = '', placeholder = '', ...props }) => {
  return (
    <TextFieldWrapper className={className}>
      <div className="relative">
        <label htmlFor={name}>{placeholder}</label>
        <Field id={name} className="field" name={name} {...props} />
      </div>

      <ErrorMessage name={name}>
        {(errMsg) => <small className="error">{errMsg}</small>}
      </ErrorMessage>
    </TextFieldWrapper>
  );
};

export default TextField;
