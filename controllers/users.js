const express = require('express');
const router = express.Router();
const User = require('../models/user');

// GET /users "get all users"
router.get('/', async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;