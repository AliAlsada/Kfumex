const express = require("express");

const router = express.Router();

router.use(express.urlencoded({extended: 'false'}));
router.use(express.json());

router.get("/", (req, res) => {
    res.render("index");
    console.log(req.session.user)
})




module.exports = router;