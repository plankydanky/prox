import RocketBooster from 'rocket-booster';

const config = {
  upstream: {
    domain: 'unifi.kingcunt.dev',
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
      value: ['US'],
    },
  ],

  cors: {
    origin: true,
    allowedHeaders: '*',
    methods: ['GET', 'POST'],
  },
};

addEventListener('fetch', (event) => {
  const booster = new RocketBooster(config);
  const response = booster.apply(event.request);
  event.respondWith(response);
});
