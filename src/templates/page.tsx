/* eslint-disable no-case-declarations */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/camelcase */
import React, { useMemo } from 'react';
import { graphql } from 'gatsby';

import { GlobalPageType, PageSliceSlidingHero, PageSliceBlockQuote } from 'src/models/graphql/page';
import { Layout, Slider, Blockquote } from 'src/components';

export const Page = ({ data, pageContext }: GlobalPageType) => {
  const { menuItems, show_header, show_breadcrumbs } = pageContext;
  const memoizedMenu = useMemo(() => menuItems, []);

  const prismicContent = data?.allPrismicPage.edges[0]?.node.data;

  if (!prismicContent) return null;

  const { body, name } = prismicContent;

  //! add dynamic breadcrumbs
  return (
    <Layout
      pageTitle={name.text}
      showHeader={show_header}
      menuItems={memoizedMenu}
      showBreadcrumbs={show_breadcrumbs}
    >
      {body.map((slice, index: number) => {
        const { slice_type } = slice;
        const sliceKey = `key__slice__${index}`;
        // console.log(slice);

        switch (slice_type) {
          case 'sliding_hero':
            const slideSlice = slice as PageSliceSlidingHero;
            return <Slider key={sliceKey} {...slideSlice} />;

          case 'block_quote':
            const blockquoteSlice = slice as PageSliceBlockQuote;
            return <Blockquote key={sliceKey} {...blockquoteSlice} />;

          default:
            return <p key={`key__sliceDefault__${index}`} />;
        }
      })}
    </Layout>
  );
};
export default Page;

export const query = graphql`
  query PageQuery($page: String) {
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
              ... on PrismicPageBodyNewsletterSubscription {
                id
                primary {
                  title
                  input_placeholder
                  button_label
                }
              }
            }
          }
        }
      }
    }
  }
`;
