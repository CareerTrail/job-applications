import React, { useState, ComponentProps } from 'react';
import styles from './Input.module.css';
import eye from 'assets/images/eye.svg';
import eyeOff from 'assets/images/eyeOff.svg';

interface InputProps extends ComponentProps<'input'> {
  variant?:
    | 'default'
    | 'defaultPasswordEyeOn'
    | 'active'
    | 'activePassword'
    | 'afterActive'
    | 'error'
    | 'disabled';
  error?: boolean;
  children?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  variant = 'default',
  type = 'text',
  error = false,
  value = '',
  children,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  let currentVariant = variant;
  if (error && children) {
    currentVariant = 'error';
  } else if (isFocused && type === 'password') {
    currentVariant = 'activePassword';
  } else if (isFocused) {
    currentVariant = 'active';
  }
  const inputClass = `${styles.input} ${styles[currentVariant]}`;

  return (
    <div className={styles.inputContainer}>
      <input
        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
        className={inputClass}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        {...props}
      />
      {type === 'password' && (
        <button
          type="button"
          onClick={toggleShowPassword}
          className={styles.eyeIcon}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          <img
            src={showPassword ? eye : eyeOff}
            alt="Toggle password visibility"
          />
        </button>
      )}
      {children && <div className={styles.helperText}>{children}</div>}
    </div>
  );
};

export default Input;
