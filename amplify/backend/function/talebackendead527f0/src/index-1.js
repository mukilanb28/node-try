const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');

/**
 * @type {import('http').Server}
 */
const server = awsServerlessExpress.createServer(app);

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  const promise = awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
  console.log(`Promise: ${promise}`);
  return promise;
};
