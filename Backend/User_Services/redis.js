const client = require('redis').createClient();

client.on('error', (err) => {
  console.log('Redis Client Error', err);
});

client.connect();

module.exports = client;