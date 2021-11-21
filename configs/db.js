const env = require("../configs/env");
const fastify = require("fastify")({ logger: true });
async function DbCon(fastify, options) {
  fastify
    .register(require("sequelize-fastify"), {
      instance: "db",
      sequelizeOptions: {
        dialect: "mysql",
        database: "yfhs",
        username: "root",
        password: "irisgroup",
        options: {
          host: "localhost",
          port: "3006",
        },
      },
    })
    .ready(async () => {
      try {
        const result = await fastify.db.authenticate();
        console.log("Database connection is successfully established.");
      } catch (err) {
        console.log(`Connection could not established: ${err}`);
      } finally {
        fastify.close();
      }
    });
}
module.exports = DbCon;
