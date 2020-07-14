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
    }
  `);

  const menuItems = result.data.allPrismicNavigation.edges[0].node.data.body;

  menuItems.map((menuItem) => {
    const {
      published,
      path: link,
      page,
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
          show_breadcrumbs,
          show_header
        }
      });

    if (published === true && menuItem.items.length > 0) {
      const subMenuItems = menuItem.items;

      subMenuItems.map((subMenuItem) => {
        const { published, path: link, page, template } = subMenuItem;
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
};
