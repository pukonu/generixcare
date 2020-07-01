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

export interface Breadcrumbs {
  title: string;
  slug?: string;
}

export interface BreadcrumbsProps {
  data: Breadcrumbs[];
}

export interface LayoutProps {
  seoTitle: string;
  pageTitle?: string;
  breadcrumbsData?: Breadcrumbs[];
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
  image: string;
}

export interface SlideItemProps extends Slider {
  index?: number;
  count?: number;
  goTo?: () => void;
  nextSlide?: () => void;
  prevSlide?: () => void;
}
