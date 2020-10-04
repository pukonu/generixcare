import { ContentBoxProps } from 'src/interfaces';
import {
  BaseQueryType,
  PageContextType,
  PrismicTextType,
  PrismicHtmlType,
  PrismicExternalLinkType,
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

export type HomeContentType = {
  items: ContentBoxProps[];
};

export type AboutContentType = {
  name: string;
  image: ImageType;
  items: { logo: ImageType }[];
  testimonials: {
    title: PrismicTextType & PrismicHtmlType;
    testimonial_content: PrismicTextType & PrismicHtmlType;
    testimonial_image: ImageType;
  }[];
} & ContentType;

export type OurValuesType = {
  name: string;
  items: {
    title: string;
    image: ImageType;
    content: PrismicTextType & PrismicHtmlType;
  }[];
};

export type MeetTheTeamType = {
  name: string;
  items: {
    title: string;
    image: ImageType;
    content: PrismicTextType & PrismicHtmlType;
  }[];
};

export type OurCarersType = {
  name: string;
  items: {
    title: string;
    image: ImageType;
    content: PrismicTextType & PrismicHtmlType;
  }[];
};

export type ContactType = {
  address?: PrismicTextType & PrismicHtmlType;
  google_map?: string;
  website?: string;
  email?: string;
  phone?: string;
  opening_hours?: PrismicTextType & PrismicHtmlType;
  job_openings?: PrismicTextType & PrismicHtmlType;
  twitter?: PrismicExternalLinkType;
  facebook?: PrismicExternalLinkType;
  google_plus?: PrismicExternalLinkType;
};

export type JoinOurTeamType = {
  button_link: { url: string };
  content: PrismicTextType & PrismicHtmlType;
  image: ImageType;
};

export type AreaType = {
  image?: ImageType;
  items?: { borough: string; towns: string }[];
  name?: string;
};

export type HowWeWorkType = {
  name: string;
} & ContentType;

export type QualityAssuranceType = {
  name: string;
  image: ImageType;
} & ContentType;

export type PageSliceComponents = {
  id: string;
  primary: {
    component:
      | 'home_content'
      | 'contact'
      | 'areas'
      | 'how_we_work'
      | 'quality_assurance'
      | 'about'
      | 'our_values'
      | 'services'
      | 'meet_the_team'
      | 'our_carers'
      | 'join_our_team';
  };
};

type SliceType = 'sliding_hero' | 'block_quote' | 'highlight' | 'newsletter' | 'components';

type PageSectionTypes = { slice_type: SliceType } & (
  | PageSliceSlidingHero
  | PageSliceBlockQuote
  | PageSliceHighlight
  | PageSliceNewsletter
  | PageSliceComponents
);

type PageType = {
  name: PrismicTextType;
  body: PageSectionTypes[];
};

export type GlobalPageType = BaseQueryType<PageType> &
  BaseQueryType<HomeContentType> &
  BaseQueryType<AboutContentType> &
  BaseQueryType<OurValuesType> &
  BaseQueryType<MeetTheTeamType> &
  BaseQueryType<OurCarersType> &
  BaseQueryType<ContactType> &
  BaseQueryType<AreaType> &
  BaseQueryType<HowWeWorkType> &
  BaseQueryType<QualityAssuranceType> &
  BaseQueryType<JoinOurTeamType> &
  PageContextType;
