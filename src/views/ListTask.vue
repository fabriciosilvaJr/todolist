<template>
  <div class="container mt-2">
    <div v-for="task in tasks" :key="task.id">
      <b-card :title="task.title" class="mb-2">
        <b-card-text>{{ task.description }}</b-card-text>
        <b-button
          variant="outline-secondary"
          class="mr-2"
          @click="edit(task.id)"
          >Editar</b-button
        >
        <b-button variant="outline-danger" class="mr-2" @click="remove(task.id)"
          >Excluir</b-button
        >
      </b-card>
    </div>

    <b-modal ref="modalRemove" hide-footer title="Exclusão de tarefa">
      <div class="d-block text-center">
        Tem certeza que deseja excluir essa {{ taskSelected.title }}?
      </div>
      <div class="mt-3 d-flex justify-content-end">
        <b-button variant="outline-secondary" class="mr-2" @click="hideModal"
          >Cancelar</b-button
        >
        <b-button
          variant="outline-danger"
          class="mr-2"
          @click="confirmRemoveTask"
          >Excluir</b-button
        >
      </div>
    </b-modal>
  </div>
</template>

<script>
import TaskService from "@/services/TaskService";

export default {
  name: "List",
  data() {
    return {
      tasks: [],
      taskSelected: [],
    };
  },

  async created() {
    await this.getAll();
  },

  methods: {
    async getAll() {
      try {
        const user_id = localStorage.getItem("user_id");
        const allTasks = await TaskService.getAllTasks();
        this.tasks = allTasks.filter((task) => task.user_id == user_id);
      } catch (error) {
        console.error(error);
      }
    },

    async edit(taskId) {
      try {
        this.taskSelected = await TaskService.getByIdTask(taskId);
        this.$router.push({ name: "form", params: { taskId } });
      } catch (error) {
        console.error(error);
      }
    },
    async remove(taskId) {
      this.taskSelected = await TaskService.getByIdTask(taskId);
      this.$refs.modalRemove.show();
    },
    hideModal() {
      this.$refs.modalRemove.hide();
    },

    async confirmRemoveTask() {
      try {
        await TaskService.deleteTask(this.taskSelected.id);
        this.tasks = this.tasks.filter(
          (task) => task.id !== this.taskSelected.id
        );
        this.hideModal();
      } catch (error) {
        console.error("Erro ao deletar tarefa:", error);
      }
    },
  },
};
</script>
