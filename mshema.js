var mongoose=require('mongoose');

var MemberSchema = new mongoose.Schema({
    message:String,
    Data:{
        Name:String,
        Email:String,
        Country:String
    },

});

module.exports = mongoose.model(
    'member', MemberSchema, 'Members');

