import {
  BaseQueryType,
  PageContextType,
  PrismicTextType,
  TitleType,
  ImageType,
  ContentType
} from './base';

type PageSliceSlidingHeroItems = TitleType & {
  show_button: boolean;
  button_label: string;
  button_link: string;
  sliding_image: ImageType;
};

export type PageSliceSlidingHero = {
  id: string;
  items: PageSliceSlidingHeroItems[];
};

export type PageSliceBlockQuote = {
  id: string;
  primary: ContentType;
};

export type PageSliceHighlight = {
  id: string;
  primary: ContentType;
};

export type PageSliceNewsletter = {
  id: string;
  primary: TitleType & {
    input_placeholder: string;
    button_label: string;
  };
};

type SliceType = 'sliding_hero' | 'block_quote' | 'highlight' | 'newsletter';

type PageSectionTypes = { slice_type: SliceType } & (
  | PageSliceSlidingHero
  | PageSliceBlockQuote
  | PageSliceHighlight
  | PageSliceNewsletter
);

type PageType = {
  name: PrismicTextType;
  body: PageSectionTypes[];
};

export type GlobalPageType = BaseQueryType<PageType> & PageContextType;
