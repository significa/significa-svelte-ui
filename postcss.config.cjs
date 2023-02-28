const path = require('path');

module.exports = {
  plugins: [
    require('postcss-preset-env')({
      features: {
        'nesting-rules': true
      }
    }),
    require('postcss-mixins')({
      mixinsDir: path.join(__dirname, 'src/lib/styles/mixins')
    })
  ]
};
