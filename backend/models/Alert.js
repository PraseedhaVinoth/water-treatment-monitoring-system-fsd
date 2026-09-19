import mongoose from 'mongoose';

const alertSchema = new mongoose.Schema({
  parameter: { type: String, required: true }, value: { type: Number, required: true },
  minimum: Number, maximum: Number, severity: { type: String, enum: ['WARNING', 'CRITICAL'], required: true },
  message: { type: String, required: true }, reading: { type: mongoose.Schema.Types.ObjectId, ref: 'MonitoringReading' },
  acknowledged: { type: Boolean, default: false }, acknowledgedAt: Date
}, { timestamps: true });
alertSchema.index({ createdAt: -1 });
export default mongoose.model('Alert', alertSchema);