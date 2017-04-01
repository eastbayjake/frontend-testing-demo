// karma.conf.js
module.exports = function(config) {
  config.set({
    browsers: ['Chrome', 'headless_chrome'],
    customLaunchers: {
      headless_chrome: {
        base: 'Chrome',
        flags: ['--headless', '--disable-web-security']
      }
    }
  });
};