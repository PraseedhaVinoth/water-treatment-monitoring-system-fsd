import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, minlength: 2 },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true, minlength: 8 },
  role: { type: String, enum: ['admin', 'operator'], default: 'operator' }
}, { timestamps: true });

userSchema.methods.toSafeObject = function () { const data = this.toObject(); delete data.password; return data; };
export default mongoose.model('User', userSchema);