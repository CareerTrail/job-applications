import GoogleIcon from 'assets/images/google.svg';
import AppleIcon from 'assets/images/apple.svg';
import FacebookIcon from 'assets/images/facebook.svg';
import { SocialLinks } from 'core/variables/constants';
import { SocialIconWrapper, SocialIcons } from './SocialIcons.styles';

const SOCIAL_LOGIN = {
  google: <GoogleIcon />,
  apple: <AppleIcon />,
  facebook: <FacebookIcon />,
};

const SocialMediaIcons = () => (
  <SocialIcons>
    <SocialIconWrapper href={SocialLinks.Google}>
      {SOCIAL_LOGIN.google}
    </SocialIconWrapper>
    <SocialIconWrapper href={SocialLinks.Apple}>
      {SOCIAL_LOGIN.apple}
    </SocialIconWrapper>
    <SocialIconWrapper href={SocialLinks.Facebook}>
      {SOCIAL_LOGIN.facebook}
    </SocialIconWrapper>
  </SocialIcons>
);

export default SocialMediaIcons;
