'use strict';

let routeHandlers = {
  POST: {},
  GET: {},
  PUT: {},
  DELETE: {},
};

module.exports = {
  get: (url, callback) => {
    routeHandlers.GET[url] = callback;
  },
  put: (url, callback) => {
    routeHandlers.PUT[url] = callback;
  },
  post: (url, callback) => {
    routeHandlers.POST[url] = callback;
  },
  delete: (url, callback) => {
    routeHandlers.DELETE[url] = callback;
  },
  route: (request, response) => {
    //parse url and body
    //find handler
    //if handler exhist let it manage the response
    //else 404
  },
};
