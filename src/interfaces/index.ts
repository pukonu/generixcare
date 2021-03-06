import { ButtonHTMLAttributes } from 'react';
import { Field } from 'formik';

import { IconName } from '@fortawesome/fontawesome-svg-core';
import { NavigationRootType } from 'src/models/graphql/navigation';
import { ImageType, ContentType } from 'src/models/graphql/base';

export type TextFieldProps = typeof Field;

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

export type ContentBoxProps = ContentType & {
  title: string;
  image?: ImageType;
};

export interface NewsletterFormValues {
  email: string;
}

export interface AreasWeCoverData {
  title: string;
  areas?: AreasWeCoverData[];
}

export interface TableProps {
  data: string[];
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

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick?: () => void;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectFieldProps {
  name: string;
  placeholder: string;
  className?: string;
  options: SelectOption[];
}

export interface CheckboxProps {
  name: string;
  label: string;
  className?: string;
}
