module.exports = {
  isStaging: true,
  debug: false,
  sourcemaps: false,
  rev: true, // rev generates hash for dist/* files so they could be cached without a problem
  uglify: true, // js uglify
  minifycss: true, // css minifications
  htmlmin: true, // html minifications
  autoreload: false, // if browser should reload page on changes, it's only used in watch mode
  host: {
    // Locations of API server
    api: process.env.API_HOST,
    // Location of front-end
    frontend: process.env.FRONTEND_HOST
  }
};
