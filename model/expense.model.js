var mongo = require('mongoose');
var expenseSchema = new mongo.Schema({
    store:'object'
});

module.exports = mongo.model('Expense',expenseSchema);

