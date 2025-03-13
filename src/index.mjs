import { addTask, deleteTask } from './controllers/task_controller.mjs';

export const handler = async (event) => {
    try {
        const env = process.env.ENVIRONMENT || "preprod";
        const httpMethod = event.requestContext.http.method;
        const path = event.requestContext.http.path;

        if (httpMethod === "POST" && path.startsWith(`/${env}/tasks`)) {
            return await addTask(event);
        } else if (httpMethod === "DELETE" && path.startsWith(`/${env}/tasks/`)) {
            const taskId = path.split('/').pop();
            return await deleteTask(taskId);
        } else {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "Route non reconnue." }),
            };
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Erreur interne.", error: error.message }),
        };
    }
};
