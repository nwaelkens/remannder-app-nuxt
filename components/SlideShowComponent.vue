<template>
  <div>
    <agile
      :nav-buttons="false"
      :dots="false"
      :autoplay-speed="8000"
      :speed="3000"
      loop
      fade
      autoplay
      :pause-on-hover="false"
    >
      <div v-for="(moment, i) in moments" :key="i">
        <div
          class="slide hero is-large"
          :style="
            'background-image: url(\'' + assetBase + moment.image.url +
              '\');background-size: cover;'
          "
        >
          <foto-comment-component
            :position="(i%2) ? 'left':'right'"
            :comment="moment.content"
            :user="moment.user"
            class="foto-comment-component"
          ></foto-comment-component>
        </div>
      </div>
    </agile>
  </div>
</template>

<script>
import CommentComponent from "~/components/CommentComponent";
import { VueAgile } from "vue-agile";

export default {
  data() {
    return {
      assetBase: process.env.VUE_APP_ASSET_BASE
    };
  },
  components: {
    "foto-comment-component": CommentComponent,
    agile: VueAgile
  },
  computed: {
    moments: function() {
      return this.$store.getters["moments/moments"];
    }
  }
};
</script>

<style>
.foto-comment-component {
  margin: 1rem;
  /* max-width: 50%; */
}

.foto-comment-component .text-balloon {
  max-width: 50%;
  opacity: 0.8;
}

.slide {
  display: block;
  height: 100vh;
  object-fit: cover;
  width: 100%;
}

.item {
  /* font-family: "Caveat", cursive; */
  font-family: "Varela Round", sans-serif;
}

.carousel-list {
  min-height: 100vh;
}

.carousel-item {
  min-height: 100vh !important;
}

.carousel-item section {
  min-height: 100vh !important;
}
</style>
