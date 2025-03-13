import { createTask, removeTask } from '../services/task_service.mjs';

export const addTask = async (event) => {
    try {
        const { responsable, date_echeance, intitule } = JSON.parse(event.body);

        if (!responsable || !date_echeance || !intitule) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "Tous les champs sont requis." }),
            };
        }

        const task = await createTask(responsable, date_echeance, intitule);

        return {
            statusCode: 201,
            body: JSON.stringify({ message: "Tâche ajoutée.", task }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Erreur lors de l'ajout.", error: error.message }),
        };
    }
};

export const deleteTask = async (taskId) => {
    try {
        if (!taskId) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "L'ID de la tâche est requis." }),
            };
        }

        const result = await removeTask(taskId);

        if (!result) {
            return {
                statusCode: 404,
                body: JSON.stringify({ message: "Tâche non trouvée." }),
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Tâche supprimée." }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Erreur lors de la suppression.", error: error.message }),
        };
    }
};
