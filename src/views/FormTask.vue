<template>
  <div class="container mt-2">
    <b-form>
        <b-form-group label="Usuário" label-for="user_id">
        <b-form-input
          id="user_id"
          v-model="form.user_id"
          type="text"
          required
          autocomplete="off"
        >
        </b-form-input>
      </b-form-group>
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
      <b-button type="submit" @click="saveTask" variant="outline-primary">Salvar</b-button>
    </b-form>
  </div>
</template>

<script>
import ToastMixin from "@/mixins/toastMixin";
import TasksModel from "@/models/TasksModel";

export default {
  name: "FormTask",
  mixins: [ToastMixin],
  data(){
    return{
      form:{
        title: "",
        description: "",
        user_id: ""
      },
      methodSave: "new"
    }
  },
 async created(){
    if(this.$route.params.taskId){
      this.methodSave = "update";
      this.form = await TasksModel.find(this.$route.params.taskId)
  
    }

  },
  methods:{
    saveTask(){

      if(this.methodSave === "update"){
        this.form.save();
        this.showToast("success","Sucesso!", "Tarefa atualizada com sucesso")
        this.$router.push({name:'list'});
        return;

      }

  
      const task = new TasksModel(this.form);
      task.save();
      this.showToast("success","Sucesso!", "Tarefa criada com sucesso")
      this.$router.push({name:'list'});
    }
  }
}
</script>
