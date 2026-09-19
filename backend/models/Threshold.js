import mongoose from 'mongoose';

const thresholdSchema = new mongoose.Schema({
  parameter: { type: String, unique: true, required: true }, label: String, unit: String,
  minimum: { type: Number, required: true }, maximum: { type: Number, required: true }
}, { timestamps: true });
export default mongoose.model('Threshold', thresholdSchema);