// query
type QueryType =
  | 'allPrismicPage'
  | 'allPrismicHomeContent'
  | 'allPrismicAbout'
  | 'allPrismicOurValues'
  | 'allPrismicContact'
  | 'allPrismicAreas'
  | 'allPrismicHowWeWork'
  | 'allPrismicQualityAssurance';

type BaseNodeType<T> = {
  node: {
    uid: string;
    data: T;
  };
};

export type BaseQueryType<T> = {
  data: {
    [keys in QueryType]: {
      edges: BaseNodeType<T>[];
    };
  };
};

export type PageContextType = {
  [key: string]: any;
};

// prismic types
export type PrismicTextType = {
  text: string;
};

export type PrismicHtmlType = {
  html: string;
};

export type PrismicExternalLinkType = {
  url: string;
};

// generix types
export type TitleType = {
  title: PrismicTextType;
};

export type ContentType = {
  content: PrismicTextType & PrismicHtmlType;
};

export type ImageType = {
  url: string;
  alt: string;
};
