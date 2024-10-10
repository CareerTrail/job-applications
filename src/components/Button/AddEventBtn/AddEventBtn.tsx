import React, { useState } from 'react';
import { ComponentProps } from 'react';
import Add from 'assets/images/add.svg';
import styles from './AddEventBtn.module.css';

type ButtonVariant = 'default' | 'hover' | 'active' | 'disabled';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: ButtonVariant;
}

const AddEventBtn: React.FC<ButtonProps> = ({
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
      <div>
        <Add />
      </div>
      {children}
    </button>
  );
};

export default AddEventBtn;
