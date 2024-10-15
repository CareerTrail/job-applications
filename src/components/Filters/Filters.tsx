import FiltersIcon from 'assets/images/components/filters.svg';
import { Button } from './Filters.styles';

interface FiltersProps {
  $variant: 'default' | 'hover' | 'active' | 'disabled';
  disabled?: boolean;
  children: React.ReactNode;
}

const Filters = ({ $variant, disabled, children }: FiltersProps) => {
  return (
    <Button $variant={$variant} disabled={disabled}>
      <div>
        <FiltersIcon />
      </div>
      {children}
    </Button>
  );
};

export default Filters;
