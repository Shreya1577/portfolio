const express = require('express');
const router  = express.Router();
const { createMessage, getMessages } = require('../controllers/messageController');

// POST /api/messages — public (contact form)
router.post('/', createMessage);

// GET  /api/messages — add auth middleware in production!
router.get('/', getMessages);

module.exports = router;