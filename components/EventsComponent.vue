<template>
  <ul class="events">
    <li v-for="(event, i) in eventsForDate" :key="i" class="event">
      <comment-component :comment="event.content" :user="event.user" class="comment-component"></comment-component>
    </li>
  </ul>
</template>

<script>
import CommentComponent from "~/components/CommentComponent";
import { mapGetters } from "vuex";
import moment from "moment/moment";

export default {
  props: {
    date: null
  },
  components: {
    CommentComponent
  },
  data() {
    return {};
  },
  computed: {
    eventsForDate() {
      return this.getEventsForDate(this.eventDate);
    },
    events() {
      return this.$store.getters["events/getEvents"];
    },
    ...mapGetters({
      getEventsForDate: "events/getEventsForDate"
    }),
    eventDate() {
      return moment(this.date).format("YYYY-MM-DD");
    }
  },
  mounted() {
    console.log(this.eventsForDate);
  }
};
</script>

<style>
.today .comment-component .text-balloon {
  background-color: #fff;
  color: #000;
  font-weight: bolder;
}

.today .comment-component .text-balloon::before {
  border-bottom-color: rgba(255, 255, 255, 1);
}
.comment-component .level-item {
  flex-shrink: 1;
}
</style>
