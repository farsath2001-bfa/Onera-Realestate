const express = require('express');
const router = express.Router();
const { createLead, getLeads, updateLead } = require('../controllers/leadController');
const requireAuth = require('../middleware/auth');

router.post('/', createLead);
router.get('/', requireAuth, getLeads);
router.patch('/:id', requireAuth, updateLead);

module.exports = router;