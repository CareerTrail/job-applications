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
}

const Input: React.FC<InputProps> = ({
  backgroundColor = 'bg_white',
  placeholder,
  borderWidth,
  borderColor = 'tertiary_stroke',
  isPassword = false,
  value,
  helperText,
  helperTextColor = 'error_stroke',
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState(value);

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
        value={inputValue || ''}
        onChange={(e) => setInputValue(e.target.value)}
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
