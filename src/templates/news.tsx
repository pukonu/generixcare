/* eslint-disable @typescript-eslint/camelcase */
import React, { useMemo } from 'react';
import { graphql } from 'gatsby';

import { GlobalPageType } from 'src/models/graphql/page';

import { Layout, News } from 'src/components';

export const NewsPage = ({ data, pageContext }: GlobalPageType) => {
  const { menuItems } = pageContext;
  const memoizedMenu = useMemo(() => menuItems, []);

  const prismicContact = data?.allPrismicContact?.edges[0]?.node?.data;
  const prismicNews = data?.allPrismicNews?.edges;

  const breadcrumbsData = [{ title: 'Home', slug: '/' }, { title: 'Latest News' }];

  return (
    <Layout
      showHeader
      showBreadcrumbs
      pageTitle="Latest News"
      menuItems={memoizedMenu}
      twitter={prismicContact.twitter}
      breadcrumbsData={breadcrumbsData}
      facebook={prismicContact.facebook}
      google_plus={prismicContact.google_plus}
    >
      <News data={prismicNews} />
    </Layout>
  );
};

export default NewsPage;

export const query = graphql`
  query MyQueryQuery {
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

    allPrismicNews {
      edges {
        node {
          uid
          data {
            title
            excerpt
            content {
              html
            }
            image {
              url
            }
          }
          last_publication_date(fromNow: true)
        }
      }
    }
  }
`;
