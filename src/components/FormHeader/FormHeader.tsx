import { Header } from './FormHeader.styles';

interface FormHeaderProps {
  title?: string;
  subtitle?: string;
  email?: string;
}

const FormHeader: React.FC<FormHeaderProps> = ({ title, subtitle, email }) => (
  <Header>
    <h1>{title}</h1>
    <h2>
      {subtitle}
      {email ? (
        <>
          <span>{` ${email}`}</span>. Please make sure you received the email
        </>
      ) : null}
    </h2>
  </Header>
);

export default FormHeader;
