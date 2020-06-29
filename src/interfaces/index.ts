import { IconName } from '@fortawesome/fontawesome-svg-core';

export interface NavItems {
  title: string;
  slug?: string;
  showInFooter?: boolean;
  children?: NavItems[];
}

export interface SocialMediaLinks {
  platform: string;
  url: string;
  icon: IconName;
}

export interface HeaderProps {
  OpenMenu: () => void;
}

export interface MobileMenuProps {
  OpenMenu: () => void;
  isMenuOpen: boolean;
}
