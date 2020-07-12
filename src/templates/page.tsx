/* eslint-disable @typescript-eslint/camelcase */
import React, { useMemo } from 'react';
// import { graphql } from 'gatsby';

import { GlobalPageType } from 'src/models/graphql/page';
import { Layout } from 'src/components';

export const Page = ({ pageContext }: GlobalPageType) => {
  const { menuItems, page, show_header, show_breadcrumbs } = pageContext;
  const memoizedMenu = useMemo(() => menuItems, []);

  //! add dynamic breadcrumbs
  return (
    <Layout
      pageTitle={page}
      showHeader={show_header}
      menuItems={memoizedMenu}
      showBreadcrumbs={show_breadcrumbs}
    >
      page
    </Layout>
  );
};
export default Page;

// export const query = graphql`
//   query PageQuery($page: String) {
//     allPrismicPage(filter: { uid: { eq: $page } }) {
//       edges {
//         node {
//           uid
//           data {
//             name {
//               text
//             }
//             body {
//               ... on PrismicPageBodySlidingHero {
//                 slice_type
//                 items {
//                   button_label
//                   button_link
//                   show_button
//                   sliding_image {
//                     alt
//                     url
//                   }
//                   title {
//                     text
//                   }
//                 }
//                 id
//               }
//               ... on PrismicPageBodyNewsletterSubscription {
//                 id
//                 slice_type
//                 primary {
//                   button_label
//                   input_placeholder
//                   title
//                 }
//               }
//               ... on PrismicPageBodyHighlight {
//                 id
//                 slice_type
//                 primary {
//                   content {
//                     text
//                   }
//                 }
//               }
//               ... on PrismicPageBodyBlockQuote {
//                 id
//                 slice_type
//                 primary {
//                   quote
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;
