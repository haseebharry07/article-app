const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {        // Full content/details of the article
    type: String,
    required: true,
  },
  image: {             // Store image filename or URL
    type: String,
    required: false,
  },
 websiteURL:{
    type:String,
    required:false,
 },        // optional URL for product

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Article", articleSchema);