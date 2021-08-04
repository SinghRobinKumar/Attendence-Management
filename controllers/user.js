const User = require("../models/user");

exports.login = (req, res, next) => {
  //? GET THE EMAIL AND PASSWORD FROM REQUEST
  const email = req.body.params.email;
  const password = req.body.params.password;

  const existingUser = new User();

  const checkIfUserPresent = existingUser.filter(user => user.email === email);
};

exports.signup = (req, res, next) => {
  //?GET THE EMAIL, NAME AND PASSWORD FROM REQUREST
  //   const email= req.body.params.email;
  //   const name=req.body.params.name;
  //   const password=req.body.params.password;
};
