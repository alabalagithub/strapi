module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      url: env("DATABASE_URL"),
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
});
