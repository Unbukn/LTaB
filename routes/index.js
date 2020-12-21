const express = require('express');
const router = express.Router();
const passport = require("../config/passport"); // Requiring passport

// HTML Routes
router.get('/', (req, res) => {
    console.log(req)
});
// API Routes

router.get('/api/', (req, res) => {
    console.log("API ROUTES INDEX")
});

module.exports = router;