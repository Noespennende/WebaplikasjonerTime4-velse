import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

const dadJokes = [
  {
    id: 1,
    title: "Why don't scientists trust atoms?",
    answer: "Because they make up everything!"
  },
  {
    id: 2,
    title: "What do you call a fake noodle?",
    answer: "An impasta!"
  },
  {
    id: 3,
    title: "Why did the scarecrow win an award?",
    answer: "He was outstanding in his field!"
  },
  {
    id: 4,
    title: "How do you organize a space party?",
    answer: "You planet!"
  },
  {
    id: 5,
    title: "What do you call a bear with no teeth?",
    answer: "A gummy bear!"
  }
];

app.get('/', (c) => {
  const data = dadJokes
  return JSON.stringify(data)
})

app.post('/post/:id', async (c) => {
  let slug = c.req.param('id')
  const id: number = Number(slug)
  const data = dadJokes.filter(obj => { return obj.id === id})
  return JSON.stringify(data)
})

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
