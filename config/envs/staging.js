module.exports = {
  // build config
  // appPath: appPath,
  // distPath: distPath,
  // app: pathCreator(appPath),
  // dist: pathCreator(distPath),
  debug: false,
  isDevelopment: false,
  isProduction: true,
  sourcemaps: false,
  rev: true,
  uglify: true,
  minifycss: true,
  htmlmin: true,
  autoreload: false,

  hosts: {
    api: 'staging.com'
  }
};
