module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: "dpg-cin9evp5rnur6sd92s2g-a.frankfurt-postgres.render.com",
      port: 5432,
      database: "store_zew5",
      user: "admin", // Ensure the correct username is provided
      password: "jpqyTWeFy9myRVn1jdffZPzNUm1iTuFL",
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
});
