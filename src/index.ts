import { Hono } from 'hono'
import { handle } from 'hono/aws-lambda'

const app = new Hono()

app.get('/', async (c) => {
  console.log('context', c);
  return c.json({
    statusCode: 200,
    message: 'Hono application in AWS Lambda (no CDK)'
  });
})

app.get('/hello', async (c) => {
  console.log('context', c);
  return c.json({
    statusCode: 200,
    message: 'You mean hello world?'
  });
})

export const handler = handle(app)
