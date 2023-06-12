<template>
  <div class="bg-black flex flex-col min-h-screen">
    <div class="w-full bg-sky-300 h-20 flex justify-between items-center">
      <div>LOGO</div>
      <button class="mr-4 bg-blue-500 text-white px-4 py-2 rounded" @click="openLoginModal">Login</button>
      <!-- Other top navigation content -->
    </div>
    <div class="flex w-screen flex-grow">
      <div v-if="isLargeScreen" class="w-36 h-screen bg-cyan-100">side nav</div>
      <div class="w-screen h-auto bg-green-50" @scroll="handleScroll">body</div>
    </div>
    <div
      class="h-24 bg-green-500 fixed bottom-0 w-screen flex justify-between items-center"
      :class="{ 'hidden': hideBottomNav }"
    >
      <div>LOGO</div>
      <!-- Other bottom navigation content -->
      <button class="mr-4 bg-blue-500 text-white px-4 py-2 rounded" @click="openLoginModal">Login</button>
    </div>
    <div v-if="showLoginModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white w-1/2 h-1/2 rounded p-4">
        <LoginView @close="closeLoginModal" />
      </div>
    </div>
  </div>
</template>

<script>
import LoginView from '@/components/LoginView.vue';

export default {
  data() {
    return {
      isLargeScreen: true,
      hideBottomNav: false,
      scrollTimer: null,
      prevScrollY: 0,
      showLoginModal: false
    };
  },
  mounted() {
    window.addEventListener('resize', this.handleScreenResize);
    this.handleScreenResize();
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleScreenResize);
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScreenResize() {
      this.isLargeScreen = window.innerWidth >= 768;
      this.hideBottomNav = window.innerWidth >= 768;
    },
    handleScroll() {
      clearTimeout(this.scrollTimer);

      if (window.pageYOffset > this.prevScrollY) {
        // Scrolling down
        this.hideBottomNav = true;
      } else {
        // Scrolling up
        this.hideBottomNav = false;
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
    }
  },
  components: {
    LoginView
  }
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
</style>
