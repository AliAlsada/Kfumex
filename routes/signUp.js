const express = require("express");
const router = express.Router();

router.use(express.urlencoded({extended: 'false'}));
router.use(express.json());

router.get("/", (req, res) => {
    res.render("signUp");
})


router.post("/auth" , (req, res) => {
    console.log(req.body);
})

module.exports = router;