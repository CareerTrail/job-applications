import TextAreaModal from 'components/TextAreaModal';
import { Colors } from 'core/variables/constants';
import styled from 'styled-components';

interface FormFieldTextAreaModalProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
}

const Caption = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-bottom: 10px;
  p {
    font-size: 1rem;
    font-weight: 500;
    color: ${Colors.primary};
  }
`;

const FormFieldTextAreaModal: React.FC<FormFieldTextAreaModalProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <>
      <Caption>
        <p>{label}</p>
      </Caption>
      <TextAreaModal
        placeholder={label}
        value={value}
        onChange={onChange}
        name="description"
        id="description"
      />
    </>
  );
};

export default FormFieldTextAreaModal;
