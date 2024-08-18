import styles from './Button.module.css';
import { ComponentProps } from 'react';
import { Colors } from 'core/variables/constants';

type ColorKeys = keyof typeof Colors;

interface ButtonProps extends ComponentProps<'button'> {
  color?: ColorKeys;
  textColor?: ColorKeys;
}

const Button: React.FC<ButtonProps> = ({
  color = 'accent',
  textColor = 'bg_white',
  children,
  ...props
}) => {
  const buttonColor = Colors[color] || Colors.accent;
  const textColorValue = Colors[textColor] || Colors.bg_white;

  const buttonStyle: React.CSSProperties = {
    backgroundColor: buttonColor,
    color: textColorValue,
  };

  return (
    <button {...props} className={styles.button} style={buttonStyle}>
      {children || 'Log in'}
    </button>
  );
};

export default Button;
