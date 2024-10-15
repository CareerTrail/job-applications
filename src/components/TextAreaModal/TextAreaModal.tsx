import React, { useState, ComponentProps } from 'react';
import styles from './TextAreaModal.module.css';

interface TextAreaModalProps extends ComponentProps<'textarea'> {
  variant?: 'default' | 'active' | 'afterActive' | 'error';
  error?: boolean;
  children?: React.ReactNode;
}

const TextAreaModal: React.FC<TextAreaModalProps> = ({
  variant = 'default',
  error = false,
  value = '',
  onChange,
  children,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  let currentVariant = variant;
  if (error && children) {
    currentVariant = 'error';
  } else if (isFocused) {
    currentVariant = 'active';
  }
  const inputClass = `${styles.input} ${styles[currentVariant]}`;

  return (
    <div>
      <span className={styles.inputContainer}>
        <textarea
          className={inputClass}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          onChange={onChange}
          {...props}
        />
      </span>
      {children && <div className={styles.helperText}>{children}</div>}
    </div>
  );
};

export default TextAreaModal;
