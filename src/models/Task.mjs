import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    responsable: { type: String, required: true },
    date_echeance: { type: Date, required: true },
    intitule: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Task', taskSchema);
