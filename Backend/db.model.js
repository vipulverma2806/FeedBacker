const mongoose = require("mongoose");
const feedbackSchema = new mongoose.Schema({
  studentName: { type: String, default: "Annonymuuus" },
  email: { type: String, default: "annonymus" },
  subject: { type: String, required: true },
  teacherName: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
});

const Feedback = new mongoose.model("feedback", feedbackSchema);
module.exports = Feedback;
