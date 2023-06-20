<template>
<div class="w-screen h-auto no-scrollbar" @scroll="handleScroll">

  <div class="bg-#86b9fd flex flex-col min-h-screen">
    <head>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
    </head>

    <div class="w-full bg-animation h-32 flex justify-between items-center border-b-2 border-blue-200">
      <div class="w-28 ml-2 hidden md:flex md:text-sm " style="font-family: 'Montserrat', sans-serif; color: #558ad3;">
        <img src="@/assets/images/logo2.png" alt="Logo" />
        Connect
      </div>
      <div class="button-container flex justify-end px-2">
        <button class="mr-4 bg-sky border-b border-l border-r border-#71a0dd text-white px-4 py-3 rounded" @click="changeSection('home')">Home</button>
        <button class="mr-4 bg-sky border-b border-l border-r border-#71a0dd text-white px-4 py-3 rounded" @click="changeSection('about')">About</button>
        <button class="mr-4 bg-sky border-b border-l border-r border-#71a0dd text-white px-4 py-3 rounded" @click="changeSection('about')">How It Works?</button>
        <button class="mr-4 bg-sky border-b border-l border-r border-#71a0dd text-white px-4 py-3 rounded">Sign Up</button>
        <button class="mr-4 bg-blue-500 border border-white hover:bg-blue-600 text-white px-4 py-3 rounded" @click="openLoginModal">Login</button>
      </div>

      <!-- Other top navigation content -->
    </div>

    <!-- HOME -->
    <transition name="fade"  mode="out-in">
      <div v-if="visibleSection === 'home'"  class="flex w-screen flex-grow bg-white">
        <div v-if="!isLargeScreen && 0" class="w-36 h-screen bg-cyan-100">side nav</div>
        <div class="w-screen h-auto" @scroll="handleScroll">
          <div class="w-full h-auto flex flex-wrap justify-around bg-white">
            <div class="flex justify-center items-center w-full h-auto bg-sky-50 px-3" style="font-family: 'Montserrat', sans-serif; color: #558cd3; font-size: 26px;padding-top:1rem;padding-bottom:.5rem">
              "Join HelpinHand: Where Kindness Connects and Communities Thrive."
            </div>

            <div class="bock md:flex md:flex-wrap -mt-0 block">
              <!-- <div class="bg-white rounded-3xl border-r border-sky-200 md:w-1/2 h-96 bg-sky-200">
                <img src="@/assets/images/help_stairs.jpg" alt="Help Stairs" />
              </div> -->
              <div class="bg-white rounded-3xl border-r border-sky-200 md:w-1/2 h-96 bg-sky-200 flex justify-end">
                  <img class="custom-img" src="@/assets/images/help_stairs.jpg" alt="Help Stairs" />
              </div>

              <div class="bg-white md:w-1/2 h-96 p-5 ">
                <span class="main-header sm:text-xl md:text-xl lg:text-2xl" style="font-family: 'Montserrat', sans-serif; color: #558cd3;">
                  HelpinHand's mission is to connect individuals in need with compassionate volunteers, fostering a culture of altruism and community support. Through our user-friendly platform, we inspire acts of kindness, bridge the gap between people, and create a world where helping others is a fundamental part of everyday life. Join the HelpinHand community and be a part of this powerful movement of compassion.
                </span>
              </div>
            </div>


            <div class="w-full px-24">
              <div class="w-full border-t border-blue-200 mt-8 pb-5"></div>
              <div class="" v-if="isSmallScreen">
                <image-carousel></image-carousel>
              </div>

              <div class="" v-else>
                <mobile-image-carousel></mobile-image-carousel>
              </div>


            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- ABOUT -->
    <transition name="fade"  mode="out-in">
      <div v-if="visibleSection === 'about'" class="flex w-screen flex-grow bg-white">
        <div v-if="!isLargeScreen && 0" class="w-36 h-screen bg-cyan-100">side nav</div>
        <div class="w-screen h-auto" @scroll="handleScroll">
          <div class="w-full h-auto flex flex-wrap justify-around bg-white">
            About
          </div>
        </div>
      </div>
    </transition>


<!-- Bottom mobile nav -->
    <div class="h-32 fixed bottom-0 w-screen flex justify-between items-center bg-sky-300 z-10" :class="{ 'hidden': hideBottomNav }">
      <div class="w-28 ml-2">
        <img src="@/assets/images/logo2.png" alt="Logo" />
      </div>
      <button class="mr-4 bg-blue-500 text-white px-4 py-2 rounded" @click="openLoginModal">Login</button>
    </div>




    <transition name="slide">
      <div v-if="showLoginModal" class="fixed inset-0 flex items-center justify-center z-10">
        <div class="bg-white w-1/2 h-1/2 rounded p-4">
          <LoginView @close="closeLoginModal" />
        </div>
      </div>
    </transition>
    <transition name="modal-bg-fade">
      <div v-if="showLoginModal" class="fixed inset-0 bg-black bg-opacity-50 modal-bg-fade"></div>
    </transition>
  </div>
</div>
</template>

<script>
import LoginView from '@/components/LoginView.vue';
import logo from '@/assets/images/logo2.png';
import ImageCarousel from './ImageCarousel.vue';  // adjust the path based on your project structure
import MobileImageCarousel from './MobileImageCarousel.vue'; 

// import logo from '@/assets/images/logo2.png';
// import logo from '@/assets/images/help_stairs.jpg';
export default {
  data() {
    return {
      isLargeScreen: true,
      hideBottomNav: false,
      scrollTimer: null,
      prevScrollY: 0,
      showLoginModal: false,
      logo: logo,
      visibleSection: 'home',
      windowWidth: 0,
      currentSlideIndex: 0,
      slides: [
        { src: './assets/images/logo2.png', alt: 'Image 1' },
      ],
    };
  },
  computed: {
    currentSlide() {
      return this.slides[this.currentSlideIndex];
    },
    isSmallScreen() {
      return this.windowWidth <= 786;
    },
  },
  beforeRouteEnter(to, from, next) {
    document.title = to.meta.title;
    next();
  },
  beforeRouteUpdate(to, from, next) {
    document.title = to.meta.title;
    next();
  },
  created() {
    window.addEventListener('resize', this.updateWindowWidth);
    this.updateWindowWidth();
  },
  mounted() {
    this.updateWindowWidth();
    window.addEventListener('resize', this.handleScreenResize);
    this.handleScreenResize();
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleScreenResize);
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    updateWindowWidth() {
      this.windowWidth = window.innerWidth;
      // this.isLargeScreen = this.windowWidth > 786;
    },
    handleScreenResize() {
      this.isLargeScreen = window.innerWidth >= 768 || window.scrollY === 0;
      this.hideBottomNav = window.innerWidth >= 768 || window.scrollY === 0;
    },
    handleScroll() {
      clearTimeout(this.scrollTimer);

      if (window.pageYOffset > this.prevScrollY || window.innerWidth >= 768) {
        // Scrolling down
        this.hideBottomNav = true;
      } else {
        // Scrolling up
        this.hideBottomNav = false;
      }
      if (window.scrollY < 125) {
        // At top of page
        this.hideBottomNav = true;
      }
      this.prevScrollY = window.pageYOffset;

      // Set a timeout to hide the bottom nav after 5 seconds of scroll inactivity
      this.scrollTimer = setTimeout(() => {
        this.hideBottomNav = true;
      }, 5000);
    },
    openLoginModal() {
      this.showLoginModal = true;
    },
    closeLoginModal() {
      this.showLoginModal = false;
    },
    changeSection(newSection) {
      // First, set the current section to null to hide it
      this.visibleSection = null;

      // Then, use $nextTick to wait until the DOM update (and thus the fade out) is complete
      this.$nextTick(() => {
        // Use a JavaScript timeout to add a slight delay
        setTimeout(() => {
          // After the delay, set the new section to make it start fading in
          this.visibleSection = newSection;
        }, 100);  // Adjust the delay as needed to create the desired effect
      });
    },
    nextSlide() {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentSlideIndex =
        (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
    },
  },

  components: {
    LoginView,
    ImageCarousel,
    MobileImageCarousel
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

.hidden {
  display: none;
}

.bg-animation {
  /* background: linear-gradient(to right, #47668f 0%, #5275a3 50%, #47668f 100%); */
  background: linear-gradient(to right, #71a0dd 0%, #86b9fd 50%, #71a0dd 100%);
  /* background: linear-gradient(to right, #71a0dd 0%, #558cd3 50%, #203b5e 100%); */
  background-size: 200% 100%;
  animation: arrowAnimation 20s linear infinite;
}

@keyframes arrowAnimation {
  0% {
    background-position: -100% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
}

.button-container {
  position: relative;
}

.button-container button {
  background: linear-gradient(to top, #71a0dd 0%, #86b9fd 50%, #71a0dd 100%);
  background-size: 100% 200%;
  background-position: 0 0;
  transition: background-position .8s;
}

.button-container button:hover {
  background-position: 0 100%;
}


.fade-enter-active {
  transition: opacity .66s;
}

.fade-leave-active {
  transition: opacity 0s;
}

.fade-enter-from, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.fade-enter-to, .fade-leave-from /* .fade-leave below version 2.1.8 */ {
  opacity: 1;
}


@keyframes slideInFromRight {
  0% {
    transform: translateX(-100%);
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideOutToLeft {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 1;
  }
}

.slide-enter-active {
  animation: slideInFromRight .3s ease-out forwards;
}

.slide-leave-active {
  animation: slideOutToLeft .5s ease-in forwards;
}


.modal-bg-fade-enter-active,
.modal-bg-fade-leave-active {
  transition: opacity .7s;
}

.modal-bg-fade-enter,
.modal-bg-fade-leave-to {
  opacity: 0;
}


.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.fade-enter-active{
  transition: opacity .66s;
}
.fade-leave-active{
  transition: opacity 0s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.no-scrollbar {
  overflow-y: auto;
  scrollbar-width: none;
}

.no-scrollbar::-webkit-scrollbar {
  display: none; 
}

@media (min-width: 900px) {
.main-header{
  font-size: 2px;
}
}

</style>
