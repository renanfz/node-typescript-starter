import type { FastifyInstance } from 'fastify'

export async function mainRoutes(app: FastifyInstance) {

     app.get('/hello', async () => {
          return 'Hello Node!'
     })
}

module.exports = mainRoutes
