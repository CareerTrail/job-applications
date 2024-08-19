import styles from './Button.module.css';
import { ComponentProps } from 'react';
import { Colors } from 'core/variables/constants';

type ColorKeys = keyof typeof Colors;

interface ButtonProps extends ComponentProps<'button'> {
  backgroundColor?: ColorKeys;
  textColor?: ColorKeys;
}

const Button: React.FC<ButtonProps> = ({
  backgroundColor = 'accent',
  textColor = 'bg_white',
  children,
  ...props
}) => {
  const buttonColor = Colors[backgroundColor] || Colors.accent;
  const textColorValue = Colors[textColor] || Colors.bg_white;

  const buttonStyle: React.CSSProperties = {
    backgroundColor: buttonColor, // Цвет фона
    color: textColorValue, // Цвет текста
  };

  return (
    <button {...props} className={styles.button} style={buttonStyle}>
      {children || 'Log in'}
    </button>
  );
};

export default Button;
