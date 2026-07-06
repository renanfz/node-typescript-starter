import fastify from 'fastify'
import mainRoutes from '../routes/main.js'

const app = fastify()
const port = 3000

app.register(mainRoutes)

app.listen({ port }).then(() => {
     console.log('HTTP server running!')
})

