const bcrypt = require("bcryptjs");
const db = require("./dbConnection");
db.get("PRAGMA foreign_keys = ON");





const userLogInAuth = (req, res) => {
     res.render("index", {user: req.session.user});          
}

// const adminLogInAuth = (req, res) => {
//      res.render("index/admin", {user: req.session.user});          
// }



module.exports = {
    userLogInAuth,
}
