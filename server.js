const fastify = require("fastify")({ logger: true });
const dbConnector = require ('./configs/db.js');
fastify.register(require("./routers/index"), { logLevel: "debug" });
fastify.register(dbConnector);
const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
