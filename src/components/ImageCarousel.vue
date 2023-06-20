<template>
  <div class="carousel">
    <div
      v-for="(slide, index) in slides"
      :key="index"
      class="carousel-slide"
      :style="{ left: `${100 * (index - currentSlideIndex)}%` }"
    >
      <img :src="slide.src" :alt="slide.alt" />
    </div>

    <button class="carousel-button prev-button" @click="prevSlide">&lt;prev</button>
    <button class="carousel-button next-button" @click="nextSlide">&gt;next</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlideIndex: 0,
      slides: [
          { src: require("../assets/images/hands.jpg"),  alt: "Image 1" },
          { src: require("../assets/images/helpingfood.png"), alt: "Image 2" },
          { src: require("../assets/images/helpingplants1.jpg"), alt: "Image 3" },
          { src: require("../assets/images/helpingmove.png"), alt: "Image 4" },
          { src: require("../assets/images/helpingplants2.jpeg"), alt: "Image 5" },
          { src: require("../assets/images/volunteer.jpg"), alt: "Image 6" },
      ],
    };
  },
  methods: {
    nextSlide() {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentSlideIndex =
        (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
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
}

.carousel-slide {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: left 0.5s ease;
}

.carousel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-button {
  position: absolute;
  z-index: 1;
  background: rgba(255,255,255,0.7);
  border: none;
  padding: 10px;
  cursor: pointer;
}

.prev-button {
  left: 10px;
}

.next-button {
  right: 10px;
}
</style>
