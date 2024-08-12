import React from "react";
import styles from "./Button.module.css";
import { Colors } from "core/variables/constants";

interface ButtonProps {
  color?: keyof typeof Colors;
  width?: string;
  height?: string;
  radius?: string;
  padding?: string;
  gap?: string;
  border?: string;
  fontSize?: string;
  fontWeight?: string;
  textTransform?: "none" | "capitalize" | "uppercase" | "lowercase";
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  color,
  width,
  height,
  radius,
  padding,
  gap,
  border,
  fontSize,
  fontWeight,
  textTransform = "none",
  disabled = false,
  onClick,
}) => {
  const buttonStyles: React.CSSProperties = {
    backgroundColor: color ? Colors[color] : Colors["accent"],
    color: Colors["bg_white"],
    width,
    height,
    borderRadius: radius || "auto",
    padding: padding || "auto",
    gap: gap || "auto",
    border: border || "none",
    fontSize: fontSize || "auto",
    fontWeight: fontWeight || "auto",
    fontFamily: "Onest, sans-serif",
    textTransform,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <button
      className={styles.button}
      style={buttonStyles}
      onClick={onClick}
      disabled={disabled}
    >
      Log in
    </button>
  );
};

export default Button;
