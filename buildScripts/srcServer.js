/**
 * Created by bstojchevski on 5/15/2017.
 */
import express from "express";
import path  from  "path";
import open  from "open";
import webpack from "webpack";
import config from "../webpack.config.dev";

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(express.static("src"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.get("/users", function (req, res) {
//  Hard coded values just used for initial testing - DB simulation!
  res.json([
    { "id": 1, "firstName": "Torko1", "lastName": "Torkovski1", "email": "torko1@gmail.com" },
    { "id": 2, "firstName": "Torko2", "lastName": "Torkovski2", "email": "torko2@gmail.com" },
    { "id": 3, "firstName": "Torko3", "lastName": "Torkovski3", "email": "torko3@gmail.com" }
  ]);
});


app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
});
