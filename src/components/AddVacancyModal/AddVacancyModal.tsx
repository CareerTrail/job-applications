import React from 'react';
import ModalBtn from 'components/Button/ModalBtn/ModalBtn';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { Colors } from 'core/variables/constants';
import { MODAL_VALUES } from 'core/variables/locales';
import FormFieldTextAreaModal from 'components/FormField/FormFieldTextAreaModal';
import FormField from 'components/FormField';

const ModalWrapper = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${Colors.bg_white};
  padding: 20px;
  border-radius: 8px;
  height: 80vh;
  width: 30vw;
  text-align: center;
  z-index: 1010;
  position: relative;
  h2 {
    font-weight: 500;
    font-size: 24px;
    color: ${Colors.primary};
    padding: 1rem;
    border-bottom: 1px solid ${Colors.tertiary_stroke};
  }
`;

const Form = styled.form`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-end;
`;

interface AddJobModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const AddVacancyModal: React.FC<AddJobModalProps> = ({
  isVisible,
  onClose,
}) => {
  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const VacancyUserSchema = Yup.object().shape({
    company: Yup.string().required('Company is Required.'),
    jobTitle: Yup.string().required('Job Title is Required.'),
    description: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      company: '',
      jobTitle: '',
      description: '',
    },
    validationSchema: VacancyUserSchema,
    onSubmit: (values) => {
      console.log(values);
      // Заносим значения в store!!
      onClose();
    },
  });

  return (
    <ModalWrapper isVisible={isVisible} onClick={handleBackgroundClick}>
      <ModalContent>
        <h2>{MODAL_VALUES.ADD_JOB}</h2>
        <Form onSubmit={formik.handleSubmit}>
          <div>
            <FormField
              id="company"
              label={MODAL_VALUES.COMPANY}
              name="company"
              onChange={formik.handleChange}
              value={formik.values.company}
              onBlur={formik.handleBlur}
              error={!!(formik.touched.company && formik.errors.company)}
              required
            />
          </div>
          <div>
            <FormField
              id="jobTitle"
              label={MODAL_VALUES.JOB_TITLE}
              name="jobTitle"
              onChange={formik.handleChange}
              value={formik.values.jobTitle}
              onBlur={formik.handleBlur}
              error={!!(formik.touched.jobTitle && formik.errors.jobTitle)}
              required
            />
          </div>
          <div>
            <FormFieldTextAreaModal
              label={MODAL_VALUES.DESCRIPTION}
              onChange={formik.handleChange}
              value={formik.values.description}
              onBlur={formik.handleBlur}
            />
          </div>
          <Buttons>
            <ModalBtn
              children={MODAL_VALUES.CANCEL}
              variant={'white'}
              onClick={onClose}
              type="button"
            />
            <ModalBtn children={MODAL_VALUES.SAVE} type="submit" />
          </Buttons>
        </Form>
      </ModalContent>
    </ModalWrapper>
  );
};

export default AddVacancyModal;
