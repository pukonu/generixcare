/* eslint-disable no-case-declarations */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/camelcase */
import React, { useMemo } from 'react';
import { graphql } from 'gatsby';

import {
  GlobalPageType,
  PageSliceSlidingHero,
  PageSliceBlockQuote,
  PageSliceHighlight,
  PageSliceNewsletter,
  PageSliceComponents
} from 'src/models/graphql/page';

import {
  About,
  Areas,
  Layout,
  Slider,
  Blockquote,
  Contact,
  HighlightText,
  HomeContent,
  HowWeWork,
  NewsletterContainer,
  OurValues,
  OurCarers,
  QualityAssurance,
  JoinOurTeam,
  CQCWidget
} from 'src/components';

export const Page = ({ data, pageContext }: GlobalPageType) => {
  const { menuItems, page_title, show_header, show_breadcrumbs } = pageContext;
  const memoizedMenu = useMemo(() => menuItems, []);

  const prismicContent = data?.allPrismicPage?.edges[0]?.node?.data;
  const prismicContact = data?.allPrismicContact?.edges[0]?.node?.data;
  const prismicHowWeWork = data?.allPrismicHowWeWork?.edges[0]?.node?.data;
  const quality = data?.allPrismicQualityAssurance?.edges[0]?.node?.data;
  const aboutContent = data?.allPrismicAbout?.edges[0]?.node?.data;
  const valuesContent = data?.allPrismicOurValues?.edges[0]?.node?.data;
  const servicesContent = data?.allPrismicServices?.edges[0]?.node?.data;
  const meetTheTeamContent = data?.allPrismicMeetTheTeam?.edges[0]?.node?.data;
  const ourCarersContent = data?.allPrismicOurCarers?.edges[0]?.node?.data;
  const prismicJoinOurTeam = data?.allPrismicJoinOurTeam?.edges[0]?.node?.data;

  if (!prismicContent) return null;

  const { body } = prismicContent;
  const pageTitle = page_title || '';
  const breadcrumbsData = [{ title: 'Home', slug: '/' }, { title: pageTitle }];

  return (
    <Layout
      showHeader={show_header}
      menuItems={memoizedMenu}
      pageTitle={pageTitle}
      twitter={prismicContact.twitter}
      breadcrumbsData={breadcrumbsData}
      showBreadcrumbs={show_breadcrumbs}
      facebook={prismicContact.facebook}
      google_plus={prismicContact.google_plus}
    >
      {body.map((slice, index: number) => {
        const { slice_type } = slice;
        const sliceKey = `key__slice__${index}`;
        // console.log(data);

        switch (slice_type) {
          case 'sliding_hero':
            const slideSlice = slice as PageSliceSlidingHero;
            return <Slider key={sliceKey} {...slideSlice} />;

          case 'block_quote':
            const blockquoteSlice = slice as PageSliceBlockQuote;
            return <Blockquote key={sliceKey} {...blockquoteSlice} />;

          case 'components':
            const componentKey = sliceKey;
            const componentSlice = slice as PageSliceComponents;
            switch (componentSlice.primary.component) {
              case 'home_content':
                return <HomeContent key={componentKey} {...{ data }} />;

              case 'contact':
                return <Contact key={componentKey} {...prismicContact} />;

              case 'areas':
                return <Areas key={componentKey} {...{ data }} />;

              case 'how_we_work':
                return <HowWeWork key={componentKey} {...prismicHowWeWork} />;

              case 'quality_assurance':
                return <QualityAssurance key={componentKey} {...quality} />;

              case 'about':
                return <About key={componentKey} {...aboutContent} />;

              case 'our_values':
                return <OurValues key={componentKey} {...valuesContent} />;

              case 'meet_the_team':
                return <OurValues key={componentKey} {...meetTheTeamContent} />;

              case 'our_carers':
                return <OurCarers key={componentKey} {...ourCarersContent} />;

              case 'services':
                return <About key={componentKey} {...servicesContent} />;

              case 'join_our_team':
                return <JoinOurTeam key={componentKey} {...prismicJoinOurTeam} />;

              case 'cqc_widget':
                return <CQCWidget key={componentKey} />;

              default:
                return <p key={componentKey} />;
            }

          case 'highlight':
            const highlightSlice = slice as PageSliceHighlight;
            return <HighlightText key={sliceKey} {...highlightSlice} />;

          case 'newsletter':
            const newsletterSlice = slice as PageSliceNewsletter;
            return <NewsletterContainer key={sliceKey} {...newsletterSlice} />;

          default:
            return <p key={`key__sliceDefault__${index}`} />;
        }
      })}
    </Layout>
  );
};
export default Page;

export const query = graphql`
  query PageQuery($page: String, $uid: String) {
    allPrismicPage(filter: { uid: { eq: $page } }) {
      edges {
        node {
          uid
          data {
            name {
              text
            }
            body {
              ... on PrismicPageBodySlidingHero {
                id
                slice_type
                items {
                  button_label
                  button_link
                  show_button
                  sliding_image {
                    url
                    alt
                  }
                  title {
                    text
                  }
                }
              }
              ... on PrismicPageBodyBlockQuote {
                id
                slice_type
                primary {
                  content {
                    text
                    html
                  }
                }
              }
              ... on PrismicPageBodyHighlight {
                id
                slice_type
                primary {
                  content {
                    html
                    text
                  }
                }
              }
              ... on PrismicPageBodyNewsletter {
                id
                slice_type
                primary {
                  title
                  input_placeholder
                  button_label
                }
              }
              ... on PrismicPageBodyComponents {
                slice_type
                primary {
                  component
                }
                id
              }
            }
          }
        }
      }
    }

    allPrismicHomeContent {
      edges {
        node {
          data {
            items {
              title
              image {
                url
                alt
              }
              content {
                text
                html
              }
            }
          }
        }
      }
    }

    allPrismicAbout {
      edges {
        node {
          data {
            name
            items {
              logo {
                url
                alt
              }
            }
            image {
              alt
              url
            }
            content {
              html
              text
            }
            testimonials {
              title {
                html
                text
              }
              testimonial_content {
                html
                text
              }
              testimonial_image {
                alt
                url
              }
            }
          }
        }
      }
    }

    allPrismicOurValues {
      edges {
        node {
          data {
            name
            items {
              title
              image {
                url
                alt
              }
              content {
                html
                text
              }
            }
          }
        }
      }
    }

    allPrismicMeetTheTeam {
      edges {
        node {
          data {
            name
            items {
              title
              image {
                url
                alt
              }
              content {
                html
                text
              }
            }
          }
        }
      }
    }

    allPrismicOurCarers {
      edges {
        node {
          data {
            name
            items {
              title
              image {
                url
                alt
              }
              content {
                html
                text
              }
            }
          }
        }
      }
    }

    allPrismicContact {
      edges {
        node {
          data {
            address {
              text
              html
            }
            google_map
            website
            email
            phone
            opening_hours {
              text
              html
            }
            job_openings {
              text
              html
            }
            twitter {
              url
            }
            facebook {
              url
            }
            google_plus {
              url
            }
          }
        }
      }
    }

    allPrismicJoinOurTeam {
      edges {
        node {
          data {
            content {
              html
            }
            image {
              url
            }
            button_link {
              url
            }
          }
        }
      }
    }

    allPrismicAreas {
      edges {
        node {
          data {
            name
            image {
              url
              alt
            }
            items {
              borough
              towns
            }
          }
        }
      }
    }

    allPrismicServices(filter: { uid: { eq: $uid } }) {
      edges {
        node {
          uid
          data {
            name
            image {
              alt
              url
            }
            content {
              html
              text
            }
          }
        }
      }
    }

    allPrismicHowWeWork(filter: { uid: { eq: $uid } }) {
      edges {
        node {
          data {
            name
            content {
              html
              text
            }
          }
        }
      }
    }

    allPrismicQualityAssurance(filter: { uid: { eq: $uid } }) {
      edges {
        node {
          data {
            name
            image {
              url
              alt
            }
            content {
              html
              text
            }
          }
        }
      }
    }
  }
`;
