<template>
  <div :class="commentClasses">
    <div class="level-item">
      <div class="avatar">
        <figure class="image is-64x64">
          <img class="avatar" :src="assetBase + user.Avatar.url" />
        </figure>
      </div>
    </div>
    <div class="level-item">
      <div class="comment">
        <div class="text-balloon">{{ comment }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      default: null,
      type: String
    },
    user: {
      default: {},
      type: Object
    },
    addclasses: {
      default: "",
      type: String
    },
    position: ""
  },
  data() {
    return {
      assetBase: process.env.VUE_APP_ASSET_BASE
    };
  },
  computed: {
    commentClasses: function() {
      let classes = null;
      classes = "comment level " + this.addclasses;
      if (this.position === "right") {
        classes = classes + " items-to-right";
      } else {
        classes = classes + " items-to-left";
      }
      return classes;
    }
  }
};
</script>

<style scoped>
img.avatar {
  border-radius: 5px;
  border: 2px solid rgba(255, 255, 255, 0.5);
}
.items-to-left {
  float: left;
}
.items-to-right {
  float: right;
}

div.avatar {
  width: 64px;
}

div.comment {
  /* width: 100%; */
}
.text-balloon {
  position: relative;
  left: 0.7rem;
  background-color: rgba(255, 255, 255, 1);
  padding: 1.125em 1.5em;
  margin: 0 1rem 1rem 0;
  /* font-size: 1.7rem; */
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3),
    0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);
  /* font-family: "Caveat", cursive; */
  /* font-weight: bolder; */
  color: #000;
  /* font-family: "Indie Flower", cursive; */
  font-family: "Varela Round", sans-serif;

  font-size: 1.2rem;
}

.text-balloon::before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  bottom: 60%;
  left: -0.62em;
  border: 0.75rem solid transparent;
  border-right: none;
  border-bottom-color: rgba(255, 255, 255, 1);
  filter: drop-shadow(-0.0625rem 0.0625rem 0 rgba(0, 0, 0, 0.1));
}
</style>
