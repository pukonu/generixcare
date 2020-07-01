const path = require('path');
const { howWeWork, qualityAssurance } = require('./src/data');

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  howWeWork.forEach(({ slug, title, html }) => {
    createPage({
      path: `/how-we-work/${slug}`,
      component: path.resolve('./src/templates/howWeWork.js'),
      context: { title, html }
    });
  });

  qualityAssurance.forEach(({ slug, title, image, html }) => {
    createPage({
      path: `/quality-assurance/${slug}`,
      component: path.resolve('./src/templates/qualityAssurance.js'),
      context: { title, image, html }
    });
  });
};
