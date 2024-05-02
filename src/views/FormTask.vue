<template>
  <div class="container mt-2">
    <b-form>
      <b-form-group label="Titulo" label-for="title">
        <b-form-input
          id="title"
          v-model="form.title"
          type="text"
          placeholder="Ex Estudar php"
          required
          autocomplete="off"
        >
        </b-form-input>
      </b-form-group>
      <b-form-group label="Descrição" label-for="description">
        <b-form-textarea
          id="description"
          v-model="form.description"
          type="text"
          placeholder="Orientação a objeto e suas propriedades"
          required
          autocomplete="off"
        >
        </b-form-textarea>
      </b-form-group>
    
      <b-button type="submit" @click="saveTask"  class="mr-2" variant="outline-primary"
        >Salvar</b-button
      >
       <b-button variant="outline-secondary" @click="cancel"
        >Cancelar</b-button>
    </b-form>
  </div>
</template>

<script>
import ToastMixin from "@/mixins/toastMixin";
import TaskService from "@/services/TaskService";

export default {
  name: "FormTask",
  mixins: [ToastMixin],
  data() {
    return {
      form: {
        title: "",
        description: "",
        user_id: localStorage.getItem("user_id"),
      },
      methodSave: "new",
    };
  },
  async created() {
    if (this.$route.params.taskId) {
      this.methodSave = "update";
      this.form = await TaskService.getByIdTask(this.$route.params.taskId);
    }
  },
  methods: {
    saveTask() {
      if (this.methodSave === "update") {
        TaskService.updateTask(this.$route.params.taskId, this.form);

        this.showToast("success", "Sucesso!", "Tarefa atualizada com sucesso");
        this.$router.push({ name: "list" });
        return;
      }

      TaskService.createTask(this.form);
      this.showToast("success", "Sucesso!", "Tarefa criada com sucesso");
      this.$router.push({ name: "list" });
    },
    cancel(){
      this.$router.push({ name: "list" });
    }
  },
};
</script>
