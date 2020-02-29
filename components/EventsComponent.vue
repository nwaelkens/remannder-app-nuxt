<template>
  <ul class="events">
    <li v-for="(event, i) in events" :key="i" class="event">
      <comment-component :comment="event.content" :user="event.user" class="comment-component"></comment-component>
    </li>
  </ul>
</template>

<script>
import CommentComponent from "~/components/CommentComponent";
export default {
  components: {
    CommentComponent
  },
  data() {
    return {};
  },
  computed: {
    events() {
      return this.$store.getters["events/events"];
    }
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
