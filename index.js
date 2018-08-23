import "babel-polyfill"; //Must be on Top always
import { Server, Utility } from '@ascendtis/chidiya'


import config from './config'
import * as models from './models'

import express from 'express';
const options = {
  port: 3000,
  cors: {
    origin: 'http://localhost:3000'
  }
}

const app = express();
//Start Server
const server = new Server({config, options});

//Load Utilities
const utils = [
  'Database', //Database Must be on Top
  'Actions'
];

server.start(app);

app.listen(options.port, (err) => {
  if (err) {
    console.log("Unable to start server.");
    process.exit(0);
  }
  const server_utils = new Utility({config, utils, app, models});

  console.log('> Ready on PORT : ', options.port);
})