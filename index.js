const express = require("express");
const pg = require("pg");

const pool = new pg.Pool({
  host: "localhost",
  port: 5432,
  database: "socialnetwork",
  user: "postgres",
  password: "0okmNJI9",
});

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/posts", async (req, res) => {
  const { rows } = await pool.query(`
      SELECT *
      FROM posts;
  `);

  res.send(`
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>lng</th>
          <th>lat</th>
        </tr>
      </thead>
      <tbody>
        ${rows
          .map(({ id, loc }) => {
            return `
            <tr>
              <td>${id}</td>
              <td>${loc.x}</td>
              <td>${loc.y}</td>
            </tr>
          `;
          })
          .join("")}
      </tbody>
    </table>
    <form method="POST">
      <h3>Create Post</h3>
      <div>
        <label>Lng</label>
        <input name="long" />
      </div>
      <div>
        <label>Lat</label>
        <input name="lat" />
      </div>
      <button type="submit">Create</button>
    </form>
  `);
});

app.post("/posts", async (req, res) => {
  const { long, lat } = req.body;

  await pool.query("INSERT INTO posts (loc) VALUES ($1);", [
    `(${long}, ${lat})`,
  ]);

  res.redirect("/posts");
});

app.listen(3005, () => {
  console.log("Listening on port 3005");
});
