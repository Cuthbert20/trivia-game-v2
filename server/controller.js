const bcrypt = require("bcryptjs");
const axios = require("axios");

module.exports = {
  //   getAllUsers: async (req, res) => {
  //     const db = req.app.get("db");
  //     const users = await db.get_all_users();
  //     res.status(200).send(users);
  //   }
  //just for fun
  allUsers: async (req, res) => {
    const db = req.app.get("db");
    const users = await db.get_all_users();
    res.status(200).send(users);
  },
  register: async (req, res) => {
    try {
      const db = req.app.get("db");
      const {
        email,
        hash,
        firstName,
        lastName,
        username,
        profilePic
      } = req.body;
      //first check if email is already registered
      const user = await db.find_email([email]);
      if (user.length > 0) {
        return res.status(400).send({ message: "Email Already in Use" });
      }
      //Hash and Salting Password
      const salt = bcrypt.genSaltSync(10);
      const password = bcrypt.hashSync(hash, salt);
      const newUser = await db.create_new_user({
        email,
        password,
        firstName,
        lastName,
        username,
        profilePic
      });
      //adding user to session, newUser returns an array
      req.session.user = newUser[0];
      //removing password from session
      delete newUser[0].password;
      console.log(req.session.user);
      res
        .status(200)
        .send({ message: "Logged In", user: req.session.user, loggedIn: true });
    } catch (err) {
      res.status(500).send({ message: "Failed to Register" });
    }
  },
  getToken: async (req, res, next) => {
    let token = await axios.get(
      "https://opentdb.com/api_token.php?command=request"
    );
    console.log(token.data.token);
  }
};
