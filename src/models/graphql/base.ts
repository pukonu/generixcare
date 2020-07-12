// query
type QueryType = 'allPrismicPage';

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
type PrismicTextType = {
  text: string;
};

type PrismicHtmlType = {
  html: string;
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
