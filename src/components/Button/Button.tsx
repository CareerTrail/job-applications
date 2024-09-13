import React, { useState } from 'react';
import { ComponentProps } from 'react';
import styles from './Button.module.css';

type ButtonVariant = 'default' | 'hover' | 'active' | 'disabled';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  children,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  let appliedVariant = variant;
  if (props.disabled) {
    appliedVariant = 'disabled';
  } else if (isActive) {
    appliedVariant = 'active';
  } else if (isHovered) {
    appliedVariant = 'hover';
  }

  const buttonClass = `${styles.button} ${styles[appliedVariant]}`;

  return (
    <button
      {...props}
      className={buttonClass}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
    >
      {children}
    </button>
  );
};

export default Button;
