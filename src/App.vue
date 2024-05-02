<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info" v-if="notIsLoginPage">
      <b-navbar-brand href="#">Todo List</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Tarefas</b-nav-item>
          <b-nav-item to="/form">Nova</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
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
  }

}
</script>


<style>
</style>
