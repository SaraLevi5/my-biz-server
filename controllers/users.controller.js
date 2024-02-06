const registerController = (req, res) => {
  /**
   * validation
   * get user from db
   *  -check email
   * create hash
   * create user
   * response
   */
  res.send("register user");
};

const loginController = (req, res) => {
  res.send("login user");
};

export { loginController, registerController };
