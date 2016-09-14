'use strict';

const redis = require('redis');

const host = process.argv[2];

const client = redis.createClient({host: host});

client.on('error', (err) => {
  console.log('Redis Client ' + err); // eslint-disable-line
  process.exit(1);
});

client.on('ready', () => {
  console.log('Redis Client ready'); // eslint-disable-line

  client.flushdb(() => {
    console.log('done flushing db');
    process.exit();
  });
});
