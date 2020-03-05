<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">Login</p>
    </header>
    <section class="modal-card-body">
      <b-field label="Email">
        <b-input type="email" v-model="email" placeholder="Je e-mail adres" required></b-input>
      </b-field>

      <b-field label="Password">
        <b-input
          type="password"
          v-model="password"
          password-reveal
          placeholder="Je  wachtwoord"
          required
        ></b-input>
      </b-field>
      <b-checkbox>Blijf ingelogd</b-checkbox>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-primary" @click="login">Login</button>
    </footer>
  </div>
</template>

<script>
import { ConsoleLogger } from "~/shared/ConsoleLogger";

export default {
  // props: ['email', 'password'],
  data() {
    return {
      isComponentModalActive: false,
      email: "",
      password: ""
    };
  },
  methods: {
    async login() {
      try {
        this.$auth.loginWith("auth", {
          data: {
            identifier: this.email,
            password: this.password
          }
        });
        // this.$router.push('/')
      } catch (e) {
        console.log(e);
        this.error = e.response.data.message;
        ConsoleLogger("[LoginComponent] " + this.error, "ERROR");
      }

      console.log(data);
    }
  }
};
</script>