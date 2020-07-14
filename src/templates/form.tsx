import React, { useMemo } from 'react';
import { graphql } from 'gatsby';

import { NavigationRootType } from 'src/models/graphql/navigation';
import { GlobalPageType } from 'src/models/graphql/page';
import { Layout, ApplicationForm } from 'src/components';

const Form = ({ data }: GlobalPageType) => {
  const menuItems = (data.allPrismicNavigation.edges[0].node.data
    .body as unknown) as NavigationRootType[];
  const prismicContact = data?.allPrismicContact?.edges[0]?.node?.data;

  const memoizedMenu = useMemo(() => menuItems, []);

  return (
    <Layout
      pageTitle="Form"
      showHeader
      menuItems={memoizedMenu}
      twitter={prismicContact.twitter}
      showBreadcrumbs
      facebook={prismicContact.facebook}
      google_plus={prismicContact.google_plus}
    >
      <ApplicationForm />
    </Layout>
  );
};

export default Form;

export const query = graphql`
  query FormQuery {
    allPrismicNavigation {
      edges {
        node {
          data {
            body {
              items {
                label
                template
                page
                path
                published
              }
              primary {
                is_dropdown
                label
                page
                path
                published
                template
                show_breadcrumbs
                show_header
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
