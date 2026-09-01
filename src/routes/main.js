import { prisma } from '../../lib/prisma.js'

async function mainRoutes(app) {


     app.get('/users', async (request, reply) => {
          const user = await prisma.user.findMany({
               //
          })
          reply.send(user)
     })

     app.post('/register', async (request, reply) => {
          const { nome, curso, ra } = request.body

          try {
               await prisma.user.create({
                    data: { nome, curso, ra }
               })
               reply.status(201).send('Usuario criado com sucesso!')
          } catch (error) {
               if (error.code == 'P2002') {
                    reply.status(400).send('RA já existe, não pode repetir')
               } else {
                    reply.status(500).send('Erro interno :(')
               }
          }
     })

     app.patch('/users/:id', async (request, reply) => {
          const { id } = request.params
          const { ra } = request.body

          const user = await prisma.user.update({
               where: { id: Number(id) },
               data: { ra: ra }
          })
          if (user) {
               reply.send({ message: 'Usurario atualizado!', user })
          } else {
               reply.status(404).send({ message: 'Usuario não encontrado!' })
          }
     })

     app.delete('/users/:id', async (request, reply) => {
          const { id } = request.params

          try {

               const validateId = await prisma.user.findUnique({
                    where: { id: Number(id) }
               })

               if (validateId !== null) {
                    const user = await prisma.user.delete({
                         where: { id: Number(id) }
                    })
                    reply.send('Usuario deletado com sucesso!')
               } else {
                    return reply.send(`Id ${id} não encontrado!`)
               }
          } catch (error) {
               reply.status(500).send({ message: 'Erro ao excluir usuário' })
          }
     })
}

export default mainRoutes
