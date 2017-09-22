'use strict';

const http = require('http');
const router = require('/router.js');

const app = http.createServer(router.route);
let isOn = false;
//Duncan's lecture code for class 8 for server file
module.exports = {
  start: () => {
    return new Promise((resolve, reject) => {
      if(isOn)
        return reject(new Error('__SERVER__is already running'));
      if(!process.env.PORT)
        return reject(new Error('process.env.PORT must be set'));
      app.listen(process.env.PORT, (err) => {
        if(err) return reject(err);
        isOn = true;
        console.log('server up on ::', process.env.PORT);
        resolve();//have to resolve or reject a promise otherwise you will not move past this point
      });
    });
  },
  stop: () => {
    return new Promise((resolve, reject) => {
      if(isOn)
        return reject(new Error('__SERVER_ERROR' + 'server is already off'));
      app.close((err) => {
        if(err)
          return reject(err);
        isOn = false;
        resolve();
      });
    });
  },
};
