export interface NavItems {
  title: string;
  slug: string | null;
  showInFooter?: boolean;
  children?: NavItems[];
}
