import React, { useState } from 'react';
import styles from './Input.module.css';
import { Colors } from 'core/variables/constants';
import eye from 'assets/images/eye.svg';
import eyeOff from 'assets/images/eyeOff.svg';

interface InputProps {
  backgroundColor?: keyof typeof Colors;
  value?: string;
  placeholder?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  borderWidth?: string;
  borderStyle?: string;
  borderColor?: keyof typeof Colors;
  padding?: string;
  isPassword?: boolean;
  helperText?: string;
  helperTextColor?: keyof typeof Colors;
  helperTextFontSize?: string;
}

const Input: React.FC<InputProps> = ({
  backgroundColor,
  value,
  width,
  placeholder,
  height,
  borderRadius,
  borderWidth = '1px',
  borderStyle = 'solid',
  borderColor,
  padding = '0px',
  isPassword = false,
  helperText,
  helperTextColor = 'error_stroke',
  helperTextFontSize = '16px',
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const color = borderColor ? Colors[borderColor] : '#ccc';
  const bgColor = backgroundColor ? Colors[backgroundColor] : 'transparent';
  const helperColor = Colors[helperTextColor];

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.inputContainer} style={{ width }}>
      <input
        type={
          isPassword && showPassword ? 'text' : isPassword ? 'password' : 'text'
        }
        name="input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => console.log(e.target.value)}
        style={{
          backgroundColor: bgColor,
          width: '100%',
          height,
          borderRadius,
          borderWidth,
          borderStyle,
          borderColor: color,
          padding: padding,
          paddingRight: isPassword ? '40px' : padding,
          boxSizing: 'border-box',
        }}
        className={styles.bordered}
      />
      {isPassword && (
        <button
          type="button"
          onClick={toggleShowPassword}
          className={styles.eyeIcon}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          <img src={showPassword ? eye : eyeOff} alt="" />
        </button>
      )}
      {helperText && (
        <div
          className={styles.helperText}
          style={{
            color: helperColor,
            fontSize: helperTextFontSize,
          }}
        >
          {helperText}
        </div>
      )}
    </div>
  );
};

export default Input;
