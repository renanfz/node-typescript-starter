/**
 * @param {import('fastify').FastifyInstance} app
 */
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
    ];


    app.get('/hello', async (request, reply) => {
        wh
        reply.send(users);
    });


    app.post('/register', async (request, reply) => {
        users.push(request.body);
        reply.status(201).send('Succes!');
    });


    app.patch('/users/:id', async (request, reply) => {
        const { id } = request.params;
        const { curso } = request.body;

        const user = users.find(us => us.id == Number(id));

        if (user) {
            user.curso = curso;
            reply.send({ message: 'User updated', id, curso });
        } else {
            reply.status(404).send({ message: 'User not found' });
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
