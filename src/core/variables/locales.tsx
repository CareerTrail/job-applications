export const LOGIN_TEXTS = {
  title: 'Log in',
  subtitle: 'Log in to access the best job opportunities and career tools',
  emailPlaceholder: 'Your email',
  passwordPlaceholder: 'Your password',
  rememberMe: 'Remember me',
  forgotPassword: 'Forgot your password?',
  noAccount: 'Don’t have an account yet?',
  signUp: 'Sign up',
  or: 'or',
};

export const REGISTER_TEXTS = {
  title: 'Sign Up',
  subtitle: ' Sign up now to access top job opportunities and career tools',
  firstNameLabel: 'First Name',
  firstNamePlaceholder: 'Your first name',
  lastNameLabel: 'Last Name',
  lastNamePlaceholder: 'Your last name',
  emailLabel: 'Email',
  emailPlaceholder: 'Your email',
  passwordLabel: 'Password',
  passwordPlaceholder: 'Your password',
  signUpButton: 'Sign Up',
  errorFallback: 'Failed to register user. Please try again.',
  alreadyHaveAccountText: 'Already have an account?',
  loginLinkText: 'Log in',
  orText: 'or',
};

export const CHECK_EMAIL = {
  title: 'Check your email',
  subtitle:
    'We have sent password reset instructions to the following email address: email. Please make sure you received the email.',
};

export const RECOVERY_PASS = {
  title: 'Reset Password',
  subTitle:
    'Forgot your password? No problem, a reset link will be sent to your email.',
  emailPlaceholder: 'Your email',
  sendLinkButton: 'Send Reset Link',
  goBackText: 'Go back to',
  loginLinkText: 'Log in',
  errorSendingEmail: 'Error sending reset password email',
};

export const NEW_PASS = {
  title: 'Reset Password',
  passwordLabel: 'New Password',
  passwordPlaceholder: 'Your new password',
  confirmPasswordLabel: 'Confirm New Password',
  confirmPasswordPlaceholder: 'Confirm your new password',
  sendButton: 'Reset your password',
  missingTokenError:
    'Token is missing. Please use the reset link from your email.',
  defaultError: 'Failed to reset password.',
};

const VARIANT_OPTIONS = ['default', 'hover', 'active', 'disabled'] as const;

export const BOARD_TEXTS = {
  JOB_SEARCH_TITLE: 'Job Search August',
  BOARD: 'Board',
  CALENDAR: 'Calendar',
  FILTER: 'Filter',
  VARIANT: VARIANT_OPTIONS[0],
  DISABLED: false,
  EVENT: 'Add event',
};

export const ASIDEBAR_TEXTS = {
  HOME: 'Home',
  RESUME_BUILDER: 'Resume Builder',
  AI_LETTERS: 'AI Cover Letters & More',
  AUTOFILL_APPS: 'Autofill Applications',
  CHROME_EXT: 'Chrome Extension',
  PROFILE: 'Profile',
  METRICS: 'Metrics',
  MY_TRACKERS: 'My Job Trackers',
  LOG_OUT: 'Log Out',
  SETTINGS: 'Settings',
};

export const SWITCH_VALUES = {
  BOARD: 'board',
  CALENDAR: 'calendar',
} as const;

export const MODAL_VALUES = {
  ADD_JOB: 'Add Job',
  COMPANY: 'Company',
  JOB_TITLE: 'Job Title',
  CANCEL: 'Cancel',
  SAVE: 'Save',
  DESCRIPTION: 'Description',
};
