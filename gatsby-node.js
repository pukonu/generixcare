const path = require('path');
const { data } = require('./src/data/howWeWork');

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  data.forEach(({ slug, title, html }) => {
    createPage({
      path: `/how-we-work/${slug}`,
      component: path.resolve('./src/templates/howWeWork.js'),
      context: { title, html }
    });
  });
};
