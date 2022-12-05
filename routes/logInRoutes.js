
const express = require("express");
const logInControllers = require("../controllers/logInControllers");

const router = express.Router();

router.use(express.urlencoded({extended: 'false'}));
router.use(express.json());


router.get("/", (req, res) => {
    res.render("logIn");
})

router.post("/auth" , logInControllers.userLogInAuth);
router.post("/auth" , logInControllers.adminLogInAuth);

module.exports = router;