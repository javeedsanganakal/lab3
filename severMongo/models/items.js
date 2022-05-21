const mongoose = require("mongoose");
const Userdb = require("./model");

var schema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Userdb,
  },
  itemName: {
    type: String,
    required:true,
    default: null,
  },
  itemCategory: {
    type: String,
    required:true,
    default: null,
  },
  itemPrice: {
    type: Number,
     required:true,
    default: null,
  },
  itemDescription: {
    type: String,
    required:true,
    default: null,
  },
  itemCount: {
    type: Number,
    required:true,
    default: null,
  },
  itemImage: {
    type: String,
    required:true,
    default: null,
  },
  sales: {
    type: Number,
    required:true,
    default: 0,
  },
});

const Items = mongoose.model("Items", schema);

module.exports = Items;
