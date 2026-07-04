
import fastify from "fastify";
import {mainRoutes} from "../routes/main.js"

const app = fastify()

app.register(mainRoutes)




app.listen({ port: 3000 }).then(() => {
     console.log('HTTP server running! ')
})

