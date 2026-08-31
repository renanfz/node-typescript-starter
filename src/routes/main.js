
import { prisma } from '../../lib/prisma.js'


//
async function mainRoutes(app) {
  const users = [
    {
      "id": 1,
      "nome": "Bosco",
      "curso": "tenente"
    },
    {
      "id": 2,
      "nome": "Handlass",
      "curso": "consultor"
    },
    {
      "id": 3,
      "nome": "usho",
      "curso": "tenente"
    }
  ]
  const usersFilter = []

  app.get('/hello', async (request, reply) => {

    reply.send(data)
  });


  app.post('/register', async (request, reply) => {
    const { nome, curso, ra } = request.body

    try {
      await prisma.user.create({
        data: { nome: nome, curso: curso, ra: ra }
      })
      reply.status(201).send('Usuario criado com sucesso!')
    } catch (error) {
      if (error.code == 'P2002') {
        reply.status(400).send('RA já existe, não pode repetir')
      } else {
        reply.status(500).send('Erro interno :(')
      }
    }
  });


  app.patch('/users/:id', async (request, reply) => {
    const { id } = request.params;
    const { nome } = request.body;

    const user = users.find(us => us.id == Number(id));

    if (user) {
      user.nome = nome;
      reply.send({ message: 'Usurario atualizado!', id, nome });
    } else {
      reply.status(404).send({ message: 'Usuario não encontrado!' });
    }
  });


  app.delete('/users/:id', async (request, reply) => {
    const { id } = request.params;

    const user = users.find(us => us.id == Number(id));

    if (user) {
      const index = users.findIndex(us => us.id == Number(id));
      users.splice(index, 1);
      reply.send({ message: 'User deleted', id });
    } else {
      reply.status(404).send({ message: 'User not found' });
    }
  });
}

export default mainRoutes;
