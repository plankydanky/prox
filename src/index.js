import RocketBooster from 'rocket-booster';

const config = {
  upstream: {
    domain: 'home.ourhome2.net',
    protocol: 'https',
  },

  optimization: {
    mirage: true,
    minify: {
      javascript: true,
      css: true,
      html: true,
    },
  },

  firewall: [
    {
      field: 'country',
      operator: 'in',
      value: ['CN', 'KP', 'SY', 'PK', 'CU'],
    },
  ],

  security: {
    fowarded: true,
    hidePoweredBy: true,
    ieNoOpen: true,
    xssFilter: true,
    noSniff: true,
    setCookie: true,
  },
};

addEventListener('fetch', (event) => {
  const booster = new RocketBooster(config);
  const response = booster.apply(event.request);
  event.respondWith(response);
});
