import React, { FunctionComponent } from 'react';

import { ButtonProps } from 'src/interfaces';
import { ButtonWrapper } from './styles';

const Button: FunctionComponent<ButtonProps> = ({
  children,
  disabled,
  className = '',
  type = 'button',
  onClick = () => null
}) => {
  return (
    <ButtonWrapper type={type} disabled={disabled} className={className} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
