/* eslint-disable no-shadow */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable camelcase */

const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query RootNavigationQuery {
      allPrismicNavigation {
        edges {
          node {
            data {
              body {
                items {
                  label
                  template
                  page
                  page_title
                  path
                  published
                }
                primary {
                  is_dropdown
                  label
                  page
                  page_title
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
          }
        }
      }
    }
  `);

  const menuItems = result.data.allPrismicNavigation.edges[0].node.data.body;

  menuItems.map((menuItem) => {
    const {
      published,
      path: link,
      page,
      page_title,
      template,
      show_breadcrumbs,
      show_header,
      is_dropdown
    } = menuItem.primary;
    const uid = link && link.split('/').reverse()[0];

    template &&
      published === true &&
      is_dropdown === false &&
      createPage({
        path: link || '/',
        component: path.resolve(`src/templates/${template}.tsx`),
        context: {
          menuItems,
          page,
          uid,
          page_title,
          show_breadcrumbs,
          show_header
        }
      });

    if (published === true && menuItem.items.length > 0) {
      const subMenuItems = menuItem.items;

      subMenuItems.map((subMenuItem) => {
        const { published, path: link, page, page_title, template } = subMenuItem;
        const uid = link && link.split('/').reverse()[0];

        template &&
          published === true &&
          createPage({
            path: link,
            component: path.resolve(`src/templates/${template}.tsx`),
            context: {
              menuItems,
              page,
              uid,
              page_title,
              show_breadcrumbs: true,
              show_header: true
            }
          });
      });
    }
  });

  createPage({
    path: 'form',
    component: path.resolve('src/templates/form.tsx')
  });

  createPage({
    path: 'latest-news',
    component: path.resolve('src/templates/news.tsx'),
    context: {
      menuItems
    }
  });

  const newsItems = result.data.allPrismicNews.edges;

  newsItems.map((el) => {
    const {
      uid,
      data: { content, image, title }
    } = el.node;

    createPage({
      path: `/latest-news/${uid}`,
      component: path.resolve('src/templates/news-single.tsx'),
      context: {
        menuItems,
        content,
        image,
        title
      }
    });
  });
};
