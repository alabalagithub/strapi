module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      url: "postgres://admin:jpqyTWeFy9myRVn1jdffZPzNUm1iTuFL@dpg-cin9evp5rnur6sd92s2g-a.frankfurt-postgres.render.com/store_zew5",
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
});
