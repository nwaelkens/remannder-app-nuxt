<template>
<form action="">
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">Login</p>
    </header>
    <section class="modal-card-body">
      <b-field label="Email">
        <b-input
                type="email"
                :value="email"
                placeholder="Je e-mail adres"
                required>
        </b-input>
      </b-field>

      <b-field label="Password">
        <b-input
                type="password"
                :value="password"
                password-reveal
                placeholder="Je  wachtwoord"
                required>
        </b-input>
      </b-field>
      <b-checkbox>Blijf ingelogd</b-checkbox>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-primary">Login</button>
    </footer>
  </div>
</form>
</template>

<script>
  export default {
    props: ['email', 'password'],
    data() {
      return {
        isComponentModalActive: false,
        formProps: {
          email: '',
          password: ''
        }
      }
    }
  }


</script>