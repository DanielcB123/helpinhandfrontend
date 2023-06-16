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
          { src: "./assets/images/image1.jpg", alt: "Image 1" },
          { src: "./assets/images/image2.jpg", alt: "Image 2" },
          { src: "./assets/images/image3.jpg", alt: "Image 3" },
        ],
        [
          { src: "./assets/images/image4.jpg", alt: "Image 4" },
          { src: "./assets/images/image5.jpg", alt: "Image 5" },
          { src: "./assets/images/image6.jpg", alt: "Image 6" },
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
  width: 30%;
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
