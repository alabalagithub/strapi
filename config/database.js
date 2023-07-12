module.exports = ({ env }) => ({
  connection: {
    url: env("DATABASE_URL"),
    ssl: {
      rejectUnauthorized: false,
    },
  },
});
