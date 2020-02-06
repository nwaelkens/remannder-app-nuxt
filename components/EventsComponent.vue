<template>
  <ul class="events">
    <li v-for="(event, i) in events" :key="i" class="event">
      <comment-component
        :comment="event.content"
        class="comment-component"
      ></comment-component>
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
    return {
      events: [
        { content: "Uw zus Riet komt vandaag." },
        { content: "Eten bij ons! Kom lekker met de fiets, mag van Jeroen!" }
      ]
    };
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
