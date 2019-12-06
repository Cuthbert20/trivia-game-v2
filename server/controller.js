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
    const db = req.app.get("db");
  }
};
