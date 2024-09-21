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
  variant?: 'default' | 'active' | 'error';
  error?: boolean;
  children?: React.ReactNode;
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

const FormField: React.FC<FormFieldProps> = ({ label, id, ...inputProps }) => (
  <InputField>
    <label htmlFor={id}>{label}</label>
    <Input id={id} {...inputProps} />
  </InputField>
);

export default FormField;
