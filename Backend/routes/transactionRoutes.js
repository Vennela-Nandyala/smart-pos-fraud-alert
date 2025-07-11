const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

router.get('/', async (req, res) => {
  const txns = await Transaction.find().sort({ createdAt: -1 });
  res.json(txns);
});

router.post('/', async (req, res) => {
  const txn = new Transaction(req.body);
  await txn.save();
  res.json(txn);
});

module.exports = router;
