<template>
  <div class="day" :class="isToday ? 'today' : ''">
    <div class="inside">
      <p class="name title is-5">{{ dayString }}</p>
      <events-component></events-component>
    </div>
  </div>
</template>

<script>
import EventsComponent from "~/components/EventsComponent";
export default {
  components: {
    EventsComponent
  },
  props: {
    isToday: {
      default: false,
      type: Boolean
    },
    date: null
  },
  computed: {
    dayString() {
      var options = {
        weekday: "long"
        // year: "numeric",
        // month: "long",
        // day: "numeric"
      };
      return this.date.toLocaleDateString("nl-NL", options);
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.day {
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 0.2rem;
}
.day * {
  opacity: 0.8;
}
.day.today * {
  opacity: 1;
}
.day .inside {
  padding: 1rem;
}
.day .name {
  padding: 0.2rem 0 0;
  color: rgba(255, 255, 255, 0.8);
  filter: drop-shadow(-0.0625rem 0.0625rem 0 rgba(0, 0, 0, 0.9));
}
.day .name:first-letter {
  text-transform: uppercase;
}
.day.today .name {
  color: #000;
  filter: none;
  font-size: 2em;
}
.day.today {
  background-color: rgba(255, 255, 255, 0.7);
  /* background-color: rgba(0, 0, 0, 0.9); */
}
</style>
