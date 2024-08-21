import React, { useState, ComponentProps } from 'react';
import styles from './Input.module.css';
import { Colors } from 'core/variables/constants';
import eye from 'assets/images/eye.svg';
import eyeOff from 'assets/images/eyeOff.svg';

type ColorKeys = keyof typeof Colors;

interface InputProps extends ComponentProps<'input'> {
  backgroundColor?: ColorKeys;
  placeholder?: string;
  borderWidth?: string;
  borderColor?: ColorKeys;
  value?: string;
  isPassword?: boolean;
  helperText?: string;
  helperTextColor?: ColorKeys;
  name: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  backgroundColor = 'bg_white',
  placeholder,
  borderWidth,
  borderColor = 'tertiary_stroke',
  isPassword = false,
  id,
  value,
  onChange,
  onBlur,
  helperText,
  helperTextColor = 'error_stroke',
  name,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const inputClr = Colors[backgroundColor] || Colors.accent;
  const borderClr = Colors[borderColor] || Colors.tertiary_stroke;
  const helperClr = Colors[helperTextColor] || Colors.error_stroke;

  const inputStyle: React.CSSProperties = {
    backgroundColor: inputClr,
    borderWidth,
    borderColor: borderClr,
  };

  const helperStyle: React.CSSProperties = {
    color: helperClr,
  };

  return (
    <div className={styles.inputContainer}>
      <input
        type={
          isPassword && showPassword ? 'text' : isPassword ? 'password' : 'text'
        }
        className={styles.input}
        style={inputStyle}
        placeholder={placeholder ? placeholder : ''}
        value={value || ''}
        onChange={onChange}
        onBlur={onBlur}
        id={id}
        name={name}
        {...props}
      />
      {isPassword && (
        <button
          type="button"
          onClick={toggleShowPassword}
          className={styles.eyeIcon}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          <img src={showPassword ? eye : eyeOff} alt="button" />
        </button>
      )}
      {helperText && (
        <div className={styles.helperText} style={helperStyle}>
          {helperText}
        </div>
      )}
    </div>
  );
};

export default Input;
