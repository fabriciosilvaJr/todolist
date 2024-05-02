import axios from "axios";
import { API_BASE_URL } from "@/config";


const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"

  }
});

export default {
  getAllTasks() {
    const token = localStorage.getItem("token");
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      return api.get("/task")
                .then(response => response.data)
                .catch(error => {
                  console.error(error);
                  throw error;
                });
    } else {
      return Promise.reject(new Error("Token não encontrado"));
    }
  },

  getByIdTask(taskId) {
    const token = localStorage.getItem("token");
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      return api.get(`/task/${taskId}`)
                .then(response => response.data)
                .catch(error => {
                  console.error(`Erro ao encontrar tarefa ${taskId}:`, error);
                  throw error;
                });
    } else {
      return Promise.reject(new Error("Token não encontrado"));
    }
  },
  

  deleteTask(taskId) {
    const token = localStorage.getItem("token");
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      return api.delete(`/task/${taskId}`)
                .then(response => response.data)
                .catch(error => {
                  console.error(`Erro ao deletar tarefa ${taskId}:`, error);
                  throw error;
                });
    } else {
      return Promise.reject(new Error("Token não encontrado"));
    }
  },

  createTask(taskData) {
    const token = localStorage.getItem("token");
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      return api.post("/task", taskData)
                .then(response => response.data)
                .catch(error => {
                  console.error("Error criar tarefa:", error);
                  throw error;
                });
    } else {
      return Promise.reject(new Error("Token não encontrado"));
    }
  },
  updateTask(taskId, taskData) {
    const token = localStorage.getItem("token");
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      return api.put(`/task/${taskId}`, taskData)
                .then(response => response.data)
                .catch(error => {
                  console.error(`Erro ao atualziar tarefa com id ${taskId}:`, error);
                  throw error;
                });
    } else {
      return Promise.reject(new Error("Token não encontrado"));
    }
  },
  
  
};
