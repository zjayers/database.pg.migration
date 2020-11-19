const pg = require("pg");

const pool = new pg.Pool({
  host: "localhost",
  port: 5432,
  database: "socialnetwork",
  user: "postgres",
  password: "0okmNJI9",
});

pool
  .query(
    `
              UPDATE posts
              SET loc = POINT(long, lat)
              WHERE loc IS NULL;
    `
  )
  .then(() => {
    console.log("Update Complete");
    pool.end();
  })
  .catch((e) => console.log(e.message));
