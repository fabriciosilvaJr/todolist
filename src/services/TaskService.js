import axios from "axios";
import { API_BASE_URL } from "@/config";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

const setAuthorizationHeader = () => {
  const token = localStorage.getItem("token");
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
    throw new Error("Token não encontrado");
  }
};

export default {
  getAllTasks() {
    setAuthorizationHeader();
    return api.get("/task")
      .then(response => response.data)
      .catch(error => {
        console.error(error);
        throw error;
      });
  },

  getByIdTask(taskId) {
    setAuthorizationHeader();
    return api.get(`/task/${taskId}`)
      .then(response => response.data)
      .catch(error => {
        console.error(`Erro ao encontrar tarefa ${taskId}:`, error);
        throw error;
      });
  },

  deleteTask(taskId) {
    setAuthorizationHeader();
    return api.delete(`/task/${taskId}`)
      .then(response => response.data)
      .catch(error => {
        console.error(`Erro ao deletar tarefa ${taskId}:`, error);
        throw error;
      });
  },

  createTask(taskData) {
    setAuthorizationHeader();
    return api.post("/task", taskData)
      .then(response => response.data)
      .catch(error => {
        console.error("Error criar tarefa:", error);
        throw error;
      });
  },

  updateTask(taskId, taskData) {
    setAuthorizationHeader();
    return api.put(`/task/${taskId}`, taskData)
      .then(response => response.data)
      .catch(error => {
        console.error(`Erro ao atualziar tarefa com id ${taskId}:`, error);
        throw error;
      });
  }
};
