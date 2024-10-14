import { ButtonColor } from 'components/Button/AddPlus/AddPlus';

export enum Pages {
  Main = '/',
  Login = '/login',
  Reg = '/sign-up',
  Profile = '/profile',
  RecoveryPass = '/reset-password-requests',
  Board = '/board',
  CheckEmail = '/checkEmail',
  NewPassword = '/reset-password',
  PasswordChanged = '/passwordChanged',
}

export enum LocalMenu {
  Board = 'Board',
  Activities = 'Activities',
  Contacts = 'Contacts',
  Documents = 'Documents',
  Map = 'Map',
  Metrics = 'Metrics',
}

export enum BoardMenu {
  WISHLIST = 'WISHLIST',
  APPLIED = 'APPLIED',
  INTERVIEW = 'INTERVIEW',
  OFFER = 'OFFER',
}

export enum Colors {
  accent = '#FE6E06',
  button_bg_hover = '#EA690C',
  button_bg_active = '#DC6109',
  tertiary_stroke = '#DEDEDE',
  bg_white = '#FFFFFF',
  secondary = '#929292',
  error_bg = '#FFF5F5',
  error_stroke = '#C13515',
  input_bg_disabled = '#F9F9F9',
  primary = '#363232',
  bg_asside = '#FFE7D6',
  purple = '#9747FF',
  blue = '#477BFF',
  green = '#59A40F',
  yellow = '#FEAA06',
}

export enum SocialLinks {
  Google = 'https://google.com',
  Apple = 'https://apple.com',
  Facebook = 'https://facebook.com',
}

export const sectionData = [
  { id: 1, title: 'Wishlist', color: 'purple' as ButtonColor },
  { id: 2, title: 'Applied', color: 'blue' as ButtonColor },
  { id: 3, title: 'Interview', color: 'yellow' as ButtonColor },
  { id: 4, title: 'Offer', color: 'green' as ButtonColor },
];

export const vacanciesData = [
  {
    id: 1,
    sectionId: 1,
    company: 'epam',
    jobTitle: 'designer',
    description: 'sss',
    like: false,
    createdDate: new Date().toISOString(),
  },
];
