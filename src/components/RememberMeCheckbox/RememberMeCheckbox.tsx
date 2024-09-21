import React from 'react';
import { RememberMe } from './RememberMeCheckbox.styles';

interface RememberMeCheckboxProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RememberMeCheckbox: React.FC<RememberMeCheckboxProps> = ({
  checked,
  onChange,
}) => (
  <RememberMe>
    <input
      type="checkbox"
      id="rememberMe"
      name="rememberMe"
      checked={checked}
      onChange={onChange}
    />
    <label htmlFor="rememberMe">Remember me</label>
  </RememberMe>
);

export default RememberMeCheckbox;
