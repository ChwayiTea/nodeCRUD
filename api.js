var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var MemberModel = require('/mshema');

// Connecting to database
var query = 'mongodb+srv://nodeC:lol12345' + '@cluster0.r7nqh.mongodb.net/crudapp?' + 'retryWrites=true&w=majority'

const db = (query);
mongoose.Promise = global.Promise;

mongoose.connect(db, { useNewUrlParser : true,
    useUnifiedTopology: true }, function(error) {
    if (error) {
        console.log("Error!" + error);
    }
});

module.exports = router;

router.get('/save', function(req, res) {
    var newMember = new MemberModel({message:"New entry successfully created",
        Name:"Sam",Email:"new@abc.com", Country:"South Africa"});

    newMember.save(function(err, data) {
        if(err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});

router.post('/save', function(req, res) {
    var newMember = new MemberModel();
    newMember.message = req.body.message;
    newMember.Name = req.body.Name;
    newMember.Email = req.body.Email;
    newMember.Country = req.body.Country;

    newMember.save(function(err, data){
        if(err){
            console.log(error);
        }
        else{
            res.send("Data inserted");
        }
    });
});

router.get('/findall', function(req, res) {
    MemberModel.find(function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });
});

router.get('/delete', function(req, res) {
    MemberModel.remove({Name:" "},
        function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
            }
        });
});

router.post('/delete', function(req, res) {
    MemberModel.findByIdAndDelete((req.body.id),
        function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
                console.log("Data Deleted!");
            }
        });
});

router.post('/update', function(req, res) {
    MemberModel.findByIdAndUpdate(req.body.id,
        {Name:req.body.Name}, function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
                console.log("Data updated!");
            }
        });
});