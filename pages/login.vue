<template>
  <section>
    <div>
      <slide-show-component></slide-show-component>
    </div>
    <div class="bottom-layer">
      <b-modal :active="true"
               has-modal-card
               trap-focus
               aria-role="dialog"
               aria-modal>
        <login-component v-bind="formProps"></login-component>
      </b-modal>
<!--      <week-calendar-component></week-calendar-component>-->
    </div>
  </section>
</template>

<script>
  import SlideShowComponent from "~/components/SlideShowComponent";
  import WeekCalendarComponent from "~/components/WeekCalendarComponent";
  import LoginComponent from "~/components/LoginComponent";

  export default {
    components: {
      WeekCalendarComponent,
      SlideShowComponent,
      LoginComponent
    },
    data() {
      return {
        isComponentModalActive: true,
        formProps: {
          email: 'evan@you.com',
          password: 'testing'
        }
      }
    }
  };
</script>

<style scoped>
  .bottom-layer {
    position: absolute;
    bottom: 0;
  }
  section {
    margin: 0;
    padding: 0;
  }
  .hero-body {
    background-color: #f00;
    margin: 0;
    padding: 0;
    flex-direction: row;
  }
  .hero-foot {
    background-color: #ddd;
  }
  .container {
    max-width: 100%;
    margin: 0;
    padding: 0;
  }
</style>
