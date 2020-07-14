import React, { FunctionComponent } from 'react';
import { Field, ErrorMessage } from 'formik';

import { CheckboxProps } from 'src/interfaces';
import { CheckboxWrapper } from './styles';

const Checkbox: FunctionComponent<CheckboxProps> = ({
  name = '',
  label = '',
  className = '',
  ...props
}) => {
  return (
    <CheckboxWrapper className={className}>
      <div className="input-wrapper">
        <label htmlFor={name} className="flex items-center">
          <Field id={name} name={name} type="checkbox" className="form-checkbox" {...props} />

          <span className="text-sm ml-2">{label}</span>
        </label>
      </div>

      <ErrorMessage name={name}>
        {(errMsg) => <small className="error">{errMsg}</small>}
      </ErrorMessage>
    </CheckboxWrapper>
  );
};

export default Checkbox;
