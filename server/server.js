const express = require("express");
const massive = require("massive");
const app = express();
require("dotenv").config();
const session = require("express-session");
const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env;
const ctrl = require("./controller.js");

app.use(express.json());

//setup sessions
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 10
    }
  })
);

//endpoints
app.get("/api/users", ctrl.allUsers);
app.post("/api/user/register", ctrl.register);

massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    app.listen(SERVER_PORT, () =>
      console.log(`${SERVER_PORT}, is now listening`)
    );
  })
  .catch(err => console.log("not connecting to db stu"));
