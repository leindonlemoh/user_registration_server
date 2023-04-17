// 1
const express = require("express");
const mysql = require("mysql2");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");

// 2
const port = 3001;
const hostname = "localhost";
const app = express();

// getting env
dotenv.config({ path: "./.env" });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(path.join(__dirname, "/public")));

// 3
const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

//5  /users/register
app.use("/users", require("./routes/user"));

// 4
app.listen(port, hostname, () => {
  console.log(`Server started at http://${hostname}:${port}`);
  db.connect((err) => {
    if (err) {
      console.log("Database error: " + err);
    } else {
      console.log("DB connected");
    }
  });
});
