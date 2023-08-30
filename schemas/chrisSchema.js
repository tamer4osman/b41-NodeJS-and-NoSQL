import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const chrisSchema = new Schema({
  title: { type: String, required: true },
  director: String,
  producer: String,
  year: { type: Number, min: 1900 },
  description: String
});

export default mongoose.model('Show', chrisSchema);
