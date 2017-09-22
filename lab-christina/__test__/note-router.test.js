'use strict';

const server = require('./lib/server.js');
const superagent = require('superagent');

describe('/api/notes', {} => {
  beforeAll(server.start)
  afterAll(server.stop)

describe('POST /api/note', () => {
  test('should respond with a 200', () => {
    return superagent.post('http://localhost:')
  })
})
test('should respond with a 400', () => {

})
});
