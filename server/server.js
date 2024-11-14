import express from "express";
import cors from "cors";
import pg from "pg";
import dontenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());
dontenv.config();

const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

app.get("/", function (request, response) {
  response.json("are you routing at me!");
});

app.get("/media", async function (request, response) {
  const result = await db.query("SELECT * FROM media");
  const media = result.rows;
  response.json(media);
  console.log(media);
});

// app.get("/reviews", async function (request, response) {
//   const result = await db.query("SELECT * FROM reviews");
//   const reviews = result.rows;
//   response.json(reviews);
// });

app.get("/types", async function (request, response) {
  const result = await db.query("SELECT * FROM types");
  const types = result.rows;
  response.json(types);
});

app.get("/reviews", async function (request, response) {
  const result = await db.query(`SELECT
reviews.id,
reviews.username,
  reviews.title,
  reviews.review,
  reviews.rating,
  types.type
FROM
reviews

JOIN types ON reviews.types_id = types.id`);
  const reviews = result.rows;
  response.json(reviews);
});

app.post("/reviews", async function (request, response) {
  const username = request.body.username;
  const title = request.body.title;
  const rating = request.body.rating;
  const review = request.body.review;
  const type = request.body.type;
  console.log(username, title, rating, review, type);
  const result = await db.query(
    `INSERT INTO reviews (username, title, rating, review, type) VALUES('${username}','${title}','${rating}','${review}','${type}')`
  );
  response.json(result);
});

app.listen(8080, () => console.log("it looks like its running at 8080"));
