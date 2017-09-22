'use strict';
const url = require('url');
const queryString = require('queryString');

module.exports = (request) => {
  return new Promise((resolve, reject) => {
    request.url = url.parse(request.url);
    request.url.query = queryString.parse(req.url.query);

    if(!(request.method === 'POST' || request.methos === 'PUT'))
      return resolve(req);

    let text = ''
    request.on('data', (buffer) => {
      text += buffer.toString();
    })
    request.on('end')
  });
};
