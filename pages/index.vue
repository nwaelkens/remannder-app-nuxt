<template>
  <section>
    <div>
      <slide-show-component></slide-show-component>
    </div>
    <div class="bottom-layer">
      <week-calendar-component></week-calendar-component>
    </div>
  </section>
</template>

<script>
import SlideShowComponent from "~/components/SlideShowComponent";
import WeekCalendarComponent from "~/components/WeekCalendarComponent";
export default {
  components: {
    WeekCalendarComponent,
    SlideShowComponent
  },
  async fetch({ store }) {
    // await store.dispatch('users/fetchUsers');
    await store.dispatch("events/fetchEvents");
    await store.dispatch("moments/fetchMoments");
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
