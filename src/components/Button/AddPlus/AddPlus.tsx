import React, { useState } from 'react';
import { ComponentProps } from 'react';
import Add from 'assets/images/add.svg';
import styles from './AddPlus.module.css';

type ButtonVariant = 'default' | 'hover' | 'active';
export type ButtonColor = 'purple' | 'blue' | 'green' | 'yellow';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: ButtonVariant;
  color: ButtonColor;
}

const AddPlus: React.FC<ButtonProps> = ({
  variant = 'default',
  color,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  let appliedVariant = variant;
  if (isActive) {
    appliedVariant = 'active';
  } else if (isHovered) {
    appliedVariant = 'hover';
  }

  const buttonClass = `${styles.button} ${styles[`${color}-${appliedVariant}`]}`;

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
    </button>
  );
};

export default AddPlus;
