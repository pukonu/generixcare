type NavigationPrimaryType = {
  label: string;
  template: string;
  page: string;
  path: string;
  is_dropdown: boolean;
  show_header: boolean;
  show_breadcrumbs: boolean;
  published: boolean;
};

export type NavigationRootType = {
  items: Omit<NavigationPrimaryType, 'is_dropdown' | 'show_header' | 'show_breadcrumbs'>[];
  primary: NavigationPrimaryType;
};

// export type NavigationWrapperType = {
//   pageContext: {
//     menuItems: NavigationRootType[];
//   };
// };
