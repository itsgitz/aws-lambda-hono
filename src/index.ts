import { Hono } from 'hono'
import { handle } from 'hono/aws-lambda'

const app = new Hono()

app.get('/', (c) => {
  console.log('context', c);
  return c.text('Hello from hono here!')
})

export const handler = handle(app)
