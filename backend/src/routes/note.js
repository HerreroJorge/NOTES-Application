const express = require("express");
const router = express.Router();

// create note
router.post('/notes', (req, res) => {
    res.send("create user");
});

module.exports = router;