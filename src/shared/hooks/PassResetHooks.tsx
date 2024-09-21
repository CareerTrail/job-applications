import axios from 'axios';

const useResetPassword = () => {
  const resetPassword = async (email: string) => {
    const response = await axios.post('/api/reset-password-req', { email });
    return response.data;
  };

  return { resetPassword };
};

export default useResetPassword;
