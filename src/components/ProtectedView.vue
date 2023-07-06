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

    <div class="flex w-full flex-grow">
      <div v-if="isLargeScreen" class="w-36 h-screen bg-cyan-100">side nav</div>

      <!-- Main content area with three sections -->
      <div class="w-full flex flex-col bg-green-50" @scroll="handleScroll">
        <!-- Top div -->
  <div class="w-full bg-yellow-200 p-4">
    top
    <div id="map" style="width: 100%; height: 400px;"></div>

          <div class="w-full sm:w-full bg-blue-200 p-5 mt-4">
            <div class="w-full sm:w-full bg-blue-200 p-5 mt-4">
              <table class="styled-table">
                <thead>
                    <tr>
                        <th>Service</th>
                        <th>Date</th>
                        <th>Location</th>
                        <th>Volunteers</th>
                        <th>View</th>
                        <th>Sign-up</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in data" :key="index">
                        <td>{{ item.service }}</td>
                        <td>{{ item.date }}</td>
                        <td>{{ item.location }}</td>
                        <td>{{ item.volunteers }}</td>
                        <td>
                            <button @click="openViewModal(index)" class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
                                View
                            </button>
                        </td>
                        <td>
                            <button @click="openSignupModal(index)" class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-700">
                                Sign-up
                            </button>
                        </td>
                    </tr>
                </tbody>

              </table>
            </div>
          </div>

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




  <!-- MODALS -->
  <div v-if="viewModalIndex !== null" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white w-1/2 h-1/2 rounded p-4">
          <button @click="closeViewModal">Close</button>
          <p>Viewing data for {{ data[viewModalIndex].service }}</p>
          <!-- Add more content to the modal as needed -->
      </div>
  </div>

  <div v-if="signupModalIndex !== null" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white w-1/2 h-1/2 rounded p-4">
          <button @click="closeSignupModal">Close</button>
          <p>Signing up for {{ data[signupModalIndex].service }}</p>
          <!-- Add more content to the modal as needed -->
      </div>
  </div>

</template>


<script>
/* global google */
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
      showLoginModal: false,
      map: null,
      data: [
          { service: 'Service 1', date: 'Date 1', location: 'Location 1', volunteers: 'Volunteers 1' },
          // add more data as needed...
      ],
      viewModalIndex: null,
      signupModalIndex: null,
    };
  },
  mounted() {
  this.$nextTick(() => {
    window.initMap = this.initMap;
    this.initMap();
  });
    window.addEventListener('resize', this.handleScreenResize);
    this.handleScreenResize();
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleScreenResize);
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    initMap() {
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });
    },
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
    },
    openViewModal(index) {
        this.viewModalIndex = index;
    },
    closeViewModal() {
        this.viewModalIndex = null;
    },
    openSignupModal(index) {
        this.signupModalIndex = index;
    },
    closeSignupModal() {
        this.signupModalIndex = null;
    },
  },
  components: {
    LoginView,

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

.styled-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    width: 100%;
    background-color: #f0fdf4;
}
.styled-table thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
    
}
.styled-table th,
.styled-table td {
    padding: 12px 24px;
    border-left: .01rem solid #009879;
    border-right: .01rem solid #009879;
}
.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
}

.styled-table tbody tr.active-row {
    font-weight: bold;
    color: #009879;
}

.styled-table thead tr:hover {
    color: #052e16;
    transform: scale(1.02);
    transition: all 0.3s ease;
}

</style>
