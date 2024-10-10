import React from 'react';
import Input from 'components/Input';
import { Colors } from 'core/variables/constants';
import styled from 'styled-components';

interface FormFieldProps {
  label: string;
  id: string;
  type?: string;
  name: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  variant?: 'default' | 'active' | 'error';
  error?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const InputField = styled.div`
  label {
    color: ${Colors.primary};
    font-size: 18px;
    display: block;
    padding-bottom: 10px;
  }
`;

const Caption = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;

  p:first-child {
    font-size: 1rem;
    font-weight: 500;
    color: ${Colors.primary};
  }

  p:last-child {
    font-size: 1rem;
    font-weight: 400;
    color: ${Colors.secondary};
  }
`;

const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  required,
  ...inputProps
}) => (
  <InputField>
    {required ? (
      <Caption>
        <p>{label}</p>
        <p>Required</p>
      </Caption>
    ) : (
      <label htmlFor={id}>{label}</label>
    )}
    <Input id={id} {...inputProps} />
  </InputField>
);

export default FormField;
