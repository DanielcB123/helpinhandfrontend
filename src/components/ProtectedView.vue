<template>
  <div class="bg-black flex flex-col min-h-screen">
    <div class="w-full bg-sky-300 h-20 flex justify-between items-center">
      <div></div>
      <div class="mr-12">
        <button @click="logout" class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-sky-500 hover:bg-sky-700">
          Logout
        </button>
      </div>
    </div>

    <div class="flex w-screen flex-grow">
      <div v-if="isLargeScreen" class="w-36 h-screen bg-cyan-100">side nav</div>

      <!-- Main content area with three sections -->
      <div class="w-full flex flex-col bg-green-50" @scroll="handleScroll">
        <!-- Top div -->
        <div class="w-full bg-yellow-200 p-4">
          <p>Top content goes here</p>
        </div>

        <!-- Middle div with three divs side by side -->
        <div class="w-full flex flex-wrap justify-between bg-red-200 p-4">
          <div class="w-full sm:w-1/3 bg-blue-200 p-4">
            <p>Middle left content goes here</p>
          </div>
          <div class="w-full sm:w-1/3 bg-green-200 p-4">
            <p>Middle center content goes here</p>
          </div>
          <div class="w-full sm:w-1/3 bg-purple-200 p-4">
            <p>Middle right content goes here</p>
          </div>
        </div>

        <!-- Bottom div with two divs side by side -->
        <div class="w-full flex flex-wrap justify-between bg-orange-200 p-4">
          <div class="w-full sm:w-1/2 bg-pink-200 p-4">
            <p>Bottom left ddnt goes here</p>
          </div>
          <div class="w-full sm:w-1/2 bg-teal-200 p-4">
            <p>Bottom right content goes here</p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="h-24 bg-green-500 fixed bottom-0 w-screen flex justify-between items-center"
      :class="{ 'hidden': hideBottomNav }"
    >
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

// export default {
//   methods: {
//     logout() {
//       localStorage.removeItem('token');
//       this.$router.push('/'); // redirect to the login page
//     }
//   }
// }
// import * as THREE from 'three';
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
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/'); // redirect to the login page
    },
    handleScreenResize() {
      this.isLargeScreen = window.innerWidth >= 768;
      this.hideBottomNav = window.innerWidth >= 768;
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
