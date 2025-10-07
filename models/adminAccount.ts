import mongoose from "mongoose";
const slug = require("mongoose-slug-updater");
mongoose.plugin(slug);

const schema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  image: String,
  address: String,
  phone: String,
  status: String,
  deleted: {
    type: Boolean,
    default: false
  },
  deletedBy: String,
  deletedAt: Date,
  createdBy: String,
  updatedBy: String,
}, {
  timestamps: true
});

export const AdminAccount = mongoose.model("AdminAccount", schema, "adminAccount");