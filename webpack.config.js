const path = require( 'path' );

const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

module.exports = {
  ...defaultConfig,
  entry: {
    'compare-image-block': path.resolve( process.cwd(), `src/index` ),
    'compare-image-frontend': path.resolve( process.cwd(), `src/frontend` ),
  }
};
