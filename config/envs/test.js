module.exports = {
  isTest: true,
  debug: true,
  sourcemaps: true,
  rev: false, // rev generates hash for dist/* files so they could be cached without a problem
  uglify: true, // js uglify
  minifycss: true, // css minifications
  htmlmin: true, // html minifications
  autoreload: false, // if browser should reload page on changes, it's only used in watch mode
  host: {
    // Locations of API server
    api: 'http://127.0.0.1:9000',
    // Location of front-end
    frontend: 'http://127.0.0.1:9000'
  }
};
