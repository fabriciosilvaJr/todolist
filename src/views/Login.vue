<template>
  <b-row class="vh-100 vw-100 row-login">
    <b-col
      sm="5"
      class="d-flex justify-content-center align-items-center left-login"
    >
      <div class="col-8">
        <h2 class="text-center mb-5 title-login">Faça o Login</h2>
        <b-form>
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
          <b-button type="button" variant="primary" block @click="login">
            Entrar
          </b-button>
          <hr />
          <b-button
            type="button"
            variant="outline-secondary"
            block
            @click="register"
          >
            Cadastrar
          </b-button>
        </b-form>
      </div>
    </b-col>
    <b-col sm="7" class="d-flex justify-content-center align-items-center">
      <img src="../assets/images/login.svg" class="img-login" />
    </b-col>
  </b-row>
</template>
<script>
import ToastMixin from "@/mixins/toastMixin";
import LoginUser from "@/models/LoginUserModel";
export default {
  mixins: [ToastMixin],

  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
    const user = new LoginUser(this.form);
    user.save()
    .then(response => {
      localStorage.setItem('token', response.token);
      this.showToast("success", "Sucesso!", "Login realizado com sucesso");
      this.$router.push({ name: "list" });
    })
    .catch(error => {
      console.error('Erro ao realizar o login', error);
      this.showToast("error", "Erro!", "Erro ao realizar o login");
    });

    },
    register() {
      this.$router.push({ name: "register" });
    },
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
.left-login {
  background-color: #f2f2f2;
}
.title-login {
  font-weight: bold;
}
.img-login {
  width: 600px;
  height: 600px;
}
</style>