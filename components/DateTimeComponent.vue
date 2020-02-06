<template>
  <div class="date-time">
    <span class="subtitle is-4">Vandaag is het </span>
    <span class="title is-1">{{ dayString }}</span>
  </div>
</template>

<script>
export default {
  props: {
    now: {
      default: new Date()
    }
  },
  data() {
    return {};
  },
  computed: {
    dayString() {
      var options = {
        weekday: "long"
      };
      return this.now.toLocaleDateString("nl-NL", options);
    }
  }
};
</script>

<style scoped>
.date-time span {
  filter: drop-shadow(-0.0625rem 0.0625rem 0 rgba(0, 0, 0, 0.9));
}
div {
  padding: 1rem;
}
span {
  color: #fff;
}
.separator {
  margin: 0 1rem;
  font-weight: 100;
}
</style>
