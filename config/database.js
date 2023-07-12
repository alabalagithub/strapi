module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: "@dpg-cin9evp5rnur6sd92s2g-a.frankfurt-postgres.render.com/store_zew5",
      port: env.int("DATABASE_PORT"),
      database: env("DATABASE_NAME"),
      user: env("DATABASE_USERNAME"),
      password: env("DATABASE_PASSWORD"),
      ssl: env.bool("DATABASE_SSL", true),
    },
  },
});
