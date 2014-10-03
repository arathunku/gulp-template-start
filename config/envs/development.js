module.exports = {
  isDevelopment: true,
  debug: true,
  sourcemaps: true,
  rev: false, // rev generates hash for dist/* files so they could be cached without a problem
  uglify: false, // js uglify
  minifycss: false, // css minifications
  htmlmin: false, // html minifications
  autoreload: true, // if browser should reload page on changes, it's only used in watch mode
  host: {
    // Locations of API server
    api: 'http://127.0.0.1:3000',
    // Location of front-end
    frontend: 'http://127.0.0.1:9000'
  }
};
