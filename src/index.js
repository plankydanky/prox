import useProxy from 'rocket-booster';

addEventListener('fetch', (event) => {
  const proxy = useProxy();
  proxy.use('/', {
    upstream: {
      domain:  'unifi.kingcunt.dev',
      protocol: 'https',
    },
  });

  const response = proxy.apply(event.request);
  event.respondWith(response);
});
