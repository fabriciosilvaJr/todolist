<template>
  <b-row class="vh-100 vw-100 row-login">
    <b-col sm="7" class="d-flex justify-content-center align-items-center">
      <img src="../assets/images/register.svg" class="img-register" />
    </b-col>
    <b-col
      sm="5"
      class="d-flex justify-content-center align-items-center right-register"
    >
      <div class="col-8">
        <h2 class="text-center mb-5 title-register">Faça o seu cadastro</h2>
        <b-form>
          <b-form-group label="Nome" label-for="name">
            <b-form-input
              id="name"
              type="text"
              placeholder="Maria Silva"
              autocomplete="off"
              v-model="form.name"
            >
            </b-form-input>
          </b-form-group>
          <b-form-group label="Email" label-for="email">
            <b-form-input
              id="email"
              type="email"
              placeholder="mariasilva@email.com"
              autocomplete="off"
              v-model="form.email"
            >
            </b-form-input>
          </b-form-group>
          <b-form-group label="Senha" label-for="password">
            <b-form-input
              id="password"
              type="password"
              placeholder="Informe sua senha"
              v-model="form.password"
            >
            </b-form-input>
          </b-form-group>

          <b-button type="button" variant="primary" block @click="register">
            Cadastrar
          </b-button>
          <hr />
          <b-button
            type="button"
            variant="outline-secondary"
            block
            @click="goToLogin"
          >
            Voltar
          </b-button>
        </b-form>
      </div>
    </b-col>
  </b-row>
</template>
<script>
import ToastMixin from "@/mixins/toastMixin";
import RegisterUser from '@/models/RegisterUserModel';
export default {
  mixins: [ToastMixin],
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    register(){
    const user = new RegisterUser(this.form);
    user.save();
    this.showToast("success","Sucesso!", "Cadastro realizado com sucesso")
    this.goToLogin();

    },
     goToLogin(){
        this.$router.push({name:'login'})
     }
  },
};
</script>


<style>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
.row-login {
  margin-left: 0;
}
.right-register {
  background-color: #f2f2f2;
}
.title-register {
  font-weight: bold;
}
.img-register {
  width: 600px;
  height: 600px;
}
</style>