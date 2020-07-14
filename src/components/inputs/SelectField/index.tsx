import React, { FunctionComponent } from 'react';
import { useField } from 'formik';
import Select, { ValueType } from 'react-select';

import { SelectFieldProps, SelectOption } from 'src/interfaces/';
import { SelectFieldWrapper } from './styles';

// colors
const primary = '#BE1E2D';
const border = '#333333';
const textLight = '#333333';
const tertiary = '#d9edf7';
const white = '#ffffff';

const SelectField: FunctionComponent<SelectFieldProps> = ({
  name = '',
  options = [],
  className = '',
  placeholder = ''
}) => {
  const [field, meta, helpers] = useField<string>(name);

  const handleBlur = (e: any) => {
    field.onBlur(e);
    helpers.setTouched(true);
  };

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      borderColor: border,
      borderRadius: '0.375rem',
      transitionDuration: '300ms',
      transitionProperty: 'box-shadow',
      transitionTimingFunction: 'cubic-bezier(0.4,0,1,1)',
      ':hover': { borderColor: border },
      'focus:': { backgroundColor: 'red' },
      boxShadow: state.isFocused ? '0 0 0 2px rgba(114, 13, 93, 0.3)' : 'none'
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      paddingTop: '0.25rem',
      paddingBottom: '0.25rem'
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: textLight,
      fontSize: '1rem'
    }),
    dropdownIndicator: (provided: any) => ({ ...provided, color: border }),
    indicatorSeparator: (provided: any) => ({
      ...provided,
      backgroundColor: border
    }),
    menu: (provided: any) => ({ ...provided, zIndex: 20 }),
    option: (provided: any, state: any) => ({
      ...provided,
      fontSize: '0.875rem',
      ':active': { backgroundColor: tertiary },
      ':hover': { backgroundColor: state.isSelected ? primary : tertiary },
      backgroundColor: state.isSelected ? primary : white
    })
  };

  return (
    <SelectFieldWrapper className={className}>
      <div className="relative">
        <label htmlFor={name}>{placeholder}</label>
        <Select
          id={name}
          options={options}
          name={field.name}
          onBlur={handleBlur}
          styles={customStyles}
          placeholder=""
          value={(options ? options.find((option) => option.value === field.value) : '') as any}
          onChange={(option: ValueType<SelectOption>): void =>
            helpers.setValue((option as SelectOption).value)
          }
        />
      </div>

      {meta.touched && meta.error ? <small className="error">{meta.error}</small> : null}
    </SelectFieldWrapper>
  );
};

export default SelectField;
