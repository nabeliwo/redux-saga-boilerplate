module.exports = [
  {
    path: '/assets/{param*}',
    method: 'GET',
    handler: {
      directory: {
        path: 'public/assets'
      }
    }
  },
  {
    path: '/{param*}',
    method: 'GET',
    handler: (request, reply) => {
      reply.view('index', { title: 'redux-saga-boilerplate' });
    }
  }
];
