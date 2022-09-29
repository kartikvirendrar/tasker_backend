const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const taskSchema = new mongoose.Schema(
  {
    user: {
      type:ObjectId,
      ref:"User",
      required: true
    },
    title: {
        type: String,
        required: true,
    },
    description: {
      type: String,
      required: true,
    },  
    fDate:{
        type: Date,
        required: true,
    },
    tDate:{
        type: Date,
        required: true,
    },
    priority:{
      type: Number,
      required: true,
    },
    completed:{
        type: Boolean,
        default: false
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);