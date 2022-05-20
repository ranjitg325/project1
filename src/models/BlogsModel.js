const mongoose = require('mongoose');
const moment = require("moment")
const ObjectId = mongoose.Schema.Types.ObjectId
const blogsmodel = new mongoose.Schema( {
    title: { 
        required:true,
        type:String
   },
    body: {
     type:String,
     required :true
    },
    authorId: {
        type:ObjectId,
        required:true,
        ref:"project1author"
    },
    tags: { 
        type:[String]
    },
    category: {
        type:[String],
         required:true,
    },
    subcategory: {
        type:[String],
    },
    isDeleted: { 
        type:Boolean,
         default: false 
        },
    delettedAt: {
        type : Date,
   
    },
    isPublished: {
        type:Boolean,
         default: false },
    publishedAt: {
        type : Date,
      
    }

}, { timestamps: true });   
   
module.exports = mongoose.model('project1blogs', blogsmodel)
