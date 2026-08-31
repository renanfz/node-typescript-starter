import Fastify from 'fastify'
import mainRoutes from '../routes/main.js'
import cors from '@fastify/cors';

const app = Fastify();
const port = 3000

await app.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE']
})

app.register(mainRoutes)

app.listen({ port }).then(() => {
     console.log('HTTP server running!')
})

