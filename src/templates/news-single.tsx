/* eslint-disable @typescript-eslint/camelcase */
import React, { useMemo } from 'react';
import { graphql } from 'gatsby';

import { GlobalPageType } from 'src/models/graphql/page';
import { Layout } from 'src/components';

const NewsSingle = ({ data, pageContext }: GlobalPageType) => {
  const { menuItems, content, image, title, last_publication_date } = pageContext;
  const memoizedMenu = useMemo(() => menuItems, []);

  const prismicContact = data?.allPrismicContact?.edges[0]?.node?.data;
  const breadcrumbsData = [
    { title: 'Home', slug: '/' },
    { title: 'Latest News', slug: '/latest-news' },
    { title }
  ];

  return (
    <Layout
      showHeader
      showBreadcrumbs
      pageTitle={title}
      menuItems={memoizedMenu}
      twitter={prismicContact.twitter}
      breadcrumbsData={breadcrumbsData}
      facebook={prismicContact.facebook}
      google_plus={prismicContact.google_plus}
    >
      <div className="flex flex-wrap lg:-mx-4">
        {!!image && (
          <div className="w-full lg:w-1/3 lg:px-4">
            <img className="w-full max-w-md h-auto object-cover" src={image.url} alt={image.alt} />
            {!!last_publication_date && (
              <div className="mt-1 text-sm text-gray-700">Posted {last_publication_date}</div>
            )}
          </div>
        )}

        {!!content && (
          <div
            className="mt-4 lg:mt-0 w-full lg:w-2/3 lg:px-4"
            dangerouslySetInnerHTML={{ __html: content.html }}
          />
        )}
      </div>
    </Layout>
  );
};

export default NewsSingle;

export const query = graphql`
  query SinglePostQuery {
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
  }
`;
