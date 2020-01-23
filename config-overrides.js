const { override, addLessLoader } = require('customize-cra');

module.exports = override(

  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#1DA57A',
      '@success-color': '#22ACEA',
      '@text-selection-bg': '#22ACEA',
      '@link-color': '#22ACEA',
    },
  })
);
