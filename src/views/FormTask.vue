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
      <b-button type="submit" variant="outline-primary">Salvar</b-button>
    </b-form>
  </div>
</template>

<script>

export default {
  name: "FormTask",
  data(){
    return{
      form:{
        title: "",
        description: ""
      }
    }
  }
}
</script>
