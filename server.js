// eslint-disable-next-line no-redeclare
/* global require, process */

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('src/app.json');
const middlewares = jsonServer.defaults({
  static: 'src',
  noCors: true,
});
const port = process.env.PORT || 3131;

server.use(middlewares);
server.use(router);

server.listen(port);