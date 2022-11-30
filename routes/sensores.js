const express = require("express");
const router = express.Router();

router.get("/ola", async (req, res, next) => {
    try {
        res.send("Olá");
    } catch (error) {
        next(error);
    } 
});

module.exports = router;