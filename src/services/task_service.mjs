import Task from '../models/Task.mjs';
import '../config/db.mjs';

export const createTask = async (responsable, date_echeance, intitule) => {
    const newTask = new Task({ responsable, date_echeance, intitule });
    return await newTask.save();
};

export const removeTask = async (taskId) => {
    return Task.findByIdAndDelete(taskId);
};
