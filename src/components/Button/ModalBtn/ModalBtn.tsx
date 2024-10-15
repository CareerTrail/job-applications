import React, { useState } from 'react';
import { ComponentProps } from 'react';
import styles from './ModalBtn.module.css';

type ButtonVariant =
  | 'default'
  | 'hover'
  | 'active'
  | 'disabled'
  | 'white'
  | 'whitehov';

interface ButtonProps extends ComponentProps<'button'> {
  $variant?: ButtonVariant;
}

const ModalBtn: React.FC<ButtonProps> = ({
  $variant = 'default',
  children,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  let appliedVariant = $variant;

  if (props.disabled) {
    appliedVariant = 'disabled';
  } else if (isActive) {
    appliedVariant = 'active';
  } else if (isHovered && $variant === 'white') {
    appliedVariant = 'whitehov';
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

export default ModalBtn;
