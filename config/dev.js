const path = require('path')

module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  sass: {
    resource: path.resolve(__dirname, '..', 'src/assets/styles/variable_dev.scss')
  },
  mini: {},
  h5: {}
}
