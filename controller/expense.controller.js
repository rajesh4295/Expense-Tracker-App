const Expense = require('../model/expense.model');

exports.test = function(req,res){
    res.send("Application up and running");
}

exports.saveExpense = function(req,res){
    let expense = new Expense({
        store: req.body.store
    });

    expense.save(function(err){
        if(err){
            res.send(err);
        }
        res.send("User added successfully");
    });
}

exports.getAllExpense = function(req,res){
    Expense.find((err,expenses)=>{
        if(err){
            res.send(err);
        }
        res.send(expenses);
    });
}

exports.getExpense = function(req,res){
    Expense.findById(req.params.id, (err,expense)=>{
        if(err){
            res.send(err);
        }
        res.send(expense);
    });
}

exports.updateExpense = function(req,res){
    Expense.findByIdAndUpdate(req.params.id, {$set: req.body}, (err)=>{
        if(err){
            res.send(err);
        }
        res.send("Expenses updated successfully");
    });
}

exports.deleteExpense = function(req,res){
    Expense.findByIdAndDelete(req.params.id, (err)=>{
        if(err){
            res.send(err);
        }
        res.send("Expenses removed successfully");
    });
}