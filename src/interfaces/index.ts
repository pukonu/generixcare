import { IconName } from '@fortawesome/fontawesome-svg-core';
import { NavigationRootType } from 'src/models/graphql/navigation';
import { ImageType } from 'src/models/graphql/base';

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

export interface FooterProps {
  navItems: NavigationRootType[];
}

export interface DesktopMenuProps {
  navItems: NavigationRootType[];
}

export interface MobileMenuProps {
  OpenMenu: () => void;
  isMenuOpen: boolean;
  navItems: NavigationRootType[];
}

export interface Breadcrumbs {
  title: string;
  slug?: string;
}

export interface BreadcrumbsProps {
  data: Breadcrumbs[];
}

export interface LayoutProps {
  pageTitle?: string;
  showHeader: boolean;
  showBreadcrumbs: boolean;
  breadcrumbsData?: Breadcrumbs[];
  menuItems: NavigationRootType[];
}

export interface PageTitleProps {
  title: string;
}

export interface ContentBoxProps {
  title: string;
  className?: string;
}

export interface NewsletterFormValues {
  email: string;
}

// export interface HowWeWorkData {
//   title: string;
//   slug: string;
//   html: string;
// }

// export interface QualityAssuranceData {
//   title: string;
//   slug: string;
//   html: string;
//   image: string;
// }

export interface AreasWeCoverData {
  title: string;
  areas?: AreasWeCoverData[];
}

export interface TableProps {
  data: AreasWeCoverData[];
}

export interface Slider {
  title: string;
  link: string;
  image: ImageType;
}

export interface SlideItemProps extends Slider {
  index?: number;
  count?: number;
  goTo?: (val: number) => void;
  nextSlide?: () => void;
  prevSlide?: () => void;
}
