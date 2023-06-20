<template>
  <div class="carousel">
    <div
      v-for="(group, index) in slideGroups"
      :key="index"
      class="carousel-slide"
      :style="{ left: `${100 * (index - currentGroupIndex)}%` }"
    >
      <img v-for="(slide, index) in group" :key="index" :src="slide.src" :alt="slide.alt" />
    </div>

    <button class="carousel-button prev-button" @click="prevSlide">&lt;prev</button>
    <button class="carousel-button next-button" @click="nextSlide">&gt;next</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentGroupIndex: 0,
      slideGroups: [
        [
          { src: require("../assets/images/hands.jpg"),  alt: "Image 1" },
          { src: require("../assets/images/helpingfood.png"), alt: "Image 2" },
          { src: require("../assets/images/helpingplants1.jpg"), alt: "Image 3" },
        ],
        [
          { src: require("../assets/images/helpingmove.png"), alt: "Image 4" },
          { src: require("../assets/images/helpingplants2.jpeg"), alt: "Image 5" },
          { src: require("../assets/images/volunteer.jpg"), alt: "Image 6" },
        ],
        // Add as many slide groups as you need
      ],
    };
  },
  methods: {
    nextSlide() {
      this.currentGroupIndex = (this.currentGroupIndex + 1) % this.slideGroups.length;
    },
    prevSlide() {
      this.currentGroupIndex =
        (this.currentGroupIndex - 1 + this.slideGroups.length) % this.slideGroups.length;
    },
  },
};
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  background-color: blued;
}

.carousel-slide {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: left 0.5s ease;
  display: flex;
  justify-content: space-around;
}

.carousel img {
  width: 33%;
  height: 100%;
  object-fit: cover;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  background: rgba(0,0,0,0.5);
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1em;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.carousel-button:hover {
  background-color: rgba(0,0,0,0.7);
}

.prev-button {
  left: 10px;
}

.next-button {
  right: 10px;
}
</style>
