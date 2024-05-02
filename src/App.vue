<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info" v-if="notIsLoginPage">
      <b-navbar-brand href="#">Todo List</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Tarefas</b-nav-item>
          <b-nav-item to="/form">Nova Tarefa</b-nav-item>
        </b-navbar-nav>
      </b-collapse>

      <b-navbar-nav right >
        <b-nav-item  
        @click="logout()"
        >
         Sair
        </b-nav-item>
      </b-navbar-nav>

       
    </b-navbar>

    <router-view />
  </div>
</template>

<script lang="ts">

export default {
  computed:{
    notIsLoginPage(){
      return this.$route.name != "login" && this.$route.name != "register";
    }
  },
  methods:{
    logout(){
      localStorage.removeItem('token');
      localStorage.removeItem('user_id');
      this.$router.push({name:'login'});
    }
  }

}
</script>


<style>
</style>
