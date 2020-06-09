const server = require('./app')


server.listen(process.env.PORT || process.env.SERVICE_PORT)