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
      <div v-for="(carousel, i) in carousels" :key="i">
        <div
          class="slide hero is-large"
          :style="
            'background-image: url(\'../../uploads/' +
              carousel.file +
              '\');background-size: cover;'
          "
        >
          <foto-comment-component
            :comment="carousel.content"
            :user="1"
            :position="carousel.position"
            class="foto-comment-component"
          ></foto-comment-component>
        </div>
      </div>
    </agile>
  </div>
</template>

<script>
import CommentComponent from "~/components/CommentComponent";
import { VueAgile } from 'vue-agile'


export default {
  components: {
    "foto-comment-component": CommentComponent,
    agile: VueAgile
  },
  data() {
    return {
      carousels: [
        {
          file: "IMG_5358.JPG",
          content:
            "Gezellig buiten eten in de hut bij een vuurtje. U had het koud en had geen jas bij, u hebt die van mij aan :-)",
          position: "left"
        },
        {
          file: "IMG_5423.JPG",
          content: "Spontaan opgepikt wandelmaatje.",
          position: "right"
        },
        {
          file: "IMG_5424.JPG",
          content: "Zaterdag middag in het bos.",
          position: "left"
        },
        {
          file: "IMG_5425.JPG",
          content: "Lekker spelen en pannekoeken eten in het bos",
          position: "right"
        },
        {
          file: "f2b94d42-70f6-4e8b-b82f-eb47120b5c94.JPG",
          content: "Verhaaltje voorlezen aan Jozua.",
          position: "left"
        },
        {
          file: "IMG_5617.JPG",
          content:
            "Met uw broer Bram naar het 40 jarig huwelijk van uw broer Henk en zijn vrouw Dieuwke.",
          position: "right"
        }
      ]
    };
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
