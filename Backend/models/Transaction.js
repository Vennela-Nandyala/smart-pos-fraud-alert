const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  user: String,
  amount: Number,
  fraud: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

TransactionSchema.pre('save', async function(next) {
  if (this.amount > 10000) {
    this.fraud = true;
  }
  next();
});

module.exports = mongoose.model('Transaction', TransactionSchema);
