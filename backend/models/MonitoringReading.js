import mongoose from 'mongoose';

const readingSchema = new mongoose.Schema({
  pH: { type: Number, required: true, min: 0, max: 14 },
  turbidity: { type: Number, required: true, min: 0 },
  temperature: { type: Number, required: true },
  waterLevel: { type: Number, required: true, min: 0, max: 100 },
  flowRate: { type: Number, required: true, min: 0 },
  pumpStatus: { type: String, enum: ['ON', 'OFF'], required: true },
  overallStatus: { type: String, enum: ['NORMAL', 'ATTENTION REQUIRED', 'CRITICAL'], default: 'NORMAL' },
  source: { type: String, enum: ['simulation', 'api'], default: 'api' }
}, { timestamps: true });
readingSchema.index({ createdAt: -1 });
export default mongoose.model('MonitoringReading', readingSchema);