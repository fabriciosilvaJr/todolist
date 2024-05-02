<template>
  <div class="container mt-2">
    <div v-for="(task) in tasks" :key="task.id">
      <b-card :title="task.title" class="mb-2">
        <b-card-text>{{task.description}}</b-card-text>
        <b-button variant="outline-secondary" class="mr-2" @click="edit(task.id)">Editar</b-button>
        <b-button variant="outline-danger" class="mr-2" @click="remove(task.id)">Excluir</b-button>
      </b-card>
    </div>
  
    <b-modal ref="modalRemove" hide-footer title="Exclusão de tarefa">
      <div class="d-block text-center">
        Tem certeza que deseja excluir essa  {{taskSelected.title}}?
      </div>
      <div class="mt-3 d-flex justify-content-end">
        <b-button variant="outline-secondary" class="mr-2" @click="hideModal">Cancelar</b-button>
        <b-button variant="outline-danger" class="mr-2" @click="confirmRemoveTask">Excluir</b-button>

      </div>
    </b-modal>
  </div>
</template>

<script>
import TasksModel from "@/models/TasksModel";
export default {
  name: "List",
  data() {
    return {
      tasks: [],
      taskSelected: []

    };
  },

 async created() {
    this.tasks = await TasksModel.get();
   
  
  },

  methods:{
    edit(taskId){
      this.$router.push({name:"form",params: {taskId}});
    },
   async remove(taskId){
      this.taskSelected = await TasksModel.find(taskId);
       this.$refs.modalRemove.show();

    },
    hideModal(){
       this.$refs.modalRemove.hide();

    },
   async confirmRemoveTask(){
      this.taskSelected.delete();
      this.tasks = this.tasks.filter(task => task.id !== this.taskSelected.id);
      this.hideModal();
    }
  }
};
</script>
