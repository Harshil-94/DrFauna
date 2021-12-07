import express from "express";
import { userRoute } from "./sub/controller";
import database from "./sub/database";

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(express.json());
app.use("/drfauna", userRoute());

database()
  .then(() => {
    console.log("database is alive");
    app.listen(5500, () => {
      console.log("the website is alive");
    });
  })
  .catch((err) => {
    console.log(err);
  });
// start with tsc and node build/index
