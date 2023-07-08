<template>
  <div class="side-nav-bg-overflow flex flex-col min-h-screen">
    <!-- <div class="w-full nav h-24 flex justify-between items-center">
      <div class="w-full flex justify-center mr-12 flex space-x-4">
        <a href="#" class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-sky-500 hover:bg-sky-700">Home</a>
        <a href="#" class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-sky-500 hover:bg-sky-700">News</a>
        <a href="#" class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-sky-500 hover:bg-sky-700">Community</a>
        <a href="#" class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-sky-500 hover:bg-sky-700">Partnerships</a>
        <a href="#" class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-sky-500 hover:bg-sky-700">Volunteer</a>
        <a href="#" class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-sky-500 hover:bg-sky-700">Messages</a>
        <a href="#" class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-sky-500 hover:bg-sky-700">Notifications</a>
      </div>
      <div class="mr-12">
        <button @click="logout" class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-sky-500 hover:bg-sky-700">
          Logout
        </button>
      </div>
    </div> -->

  <div class="w-full nav h-24 flex justify-between items-center">
    <div class="w-full flex justify-center mr-12 flex space-x-4 desktop-nav">
      <button @click="isMenuOpen = !isMenuOpen" class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-sky-500 hover:bg-sky-700">
        Menu
      </button>
      <div v-if="isMenuOpen" class="dropdown-menu">
        <a href="#" class="dropdown-item">Home</a>
        <a href="#" class="dropdown-item">News</a>
        <a href="#" class="dropdown-item">Community</a>
        <a href="#" class="dropdown-item">Partnerships</a>
        <a href="#" class="dropdown-item">Volunteer</a>
        <a href="#" class="dropdown-item">Messages</a>
        <a href="#" class="dropdown-item">Notifications</a>
      </div>
    </div>
    <div class="w-full flex justify-center mr-12 flex space-x-4 mobile-nav">
      <a href="#" class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-sky-500 hover:bg-sky-700">Home</a>
      <a href="#" class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-sky-500 hover:bg-sky-700">News</a>
      <a href="#" class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-sky-500 hover:bg-sky-700">Community</a>
      <a href="#" class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-sky-500 hover:bg-sky-700">Partnerships</a>
      <a href="#" class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-sky-500 hover:bg-sky-700">Volunteer</a>
      <a href="#" class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-sky-500 hover:bg-sky-700">Messages</a>
      <a href="#" class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-sky-500 hover:bg-sky-700">Notifications</a>
    </div>
    <div class="mr-12">
      <button @click="logout" class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-sky-500 hover:bg-sky-700">
        Logout
      </button>
    </div>
  </div>



    <div class="flex w-full flex-grow">
      <!-- Side Navigation Bar -->
      <div v-if="isLargeScreen" class="w-48 h-screen side-nav bg-cyan-100 p-4">
        <a href="#" class=" my-6 block py-2 px-4 font-semibold rounded-lg shadow-md text-black bg-sky-200 hover:bg-sky-500 hover:text-white">Profile</a>
        <a href="#" class=" my-6 block py-2 px-4 font-semibold rounded-lg shadow-md text-black bg-sky-200 hover:bg-sky-500 hover:text-white">Retreats</a>
        <a href="#" class=" my-6 block py-2 px-4 font-semibold rounded-lg shadow-md text-black bg-sky-200 hover:bg-sky-500 hover:text-white">Journals</a>
        <a href="#" class=" my-6 block py-2 px-4 font-semibold rounded-lg shadow-md text-black bg-sky-200 hover:bg-sky-500 hover:text-white">Challenges</a>
        <a href="#" class=" my-6 block py-2 px-4 font-semibold rounded-lg shadow-md text-black bg-sky-200 hover:bg-sky-500 hover:text-white">Event Calendar</a>
        <a href="#" class=" my-6 block py-2 px-4 font-semibold rounded-lg shadow-md text-black bg-sky-200 hover:bg-sky-500 hover:text-white">Volunteer History</a>
        <a href="#" class=" my-6 block py-2 px-4 font-semibold rounded-lg shadow-md text-black bg-sky-200 hover:bg-sky-500 hover:text-white">Settings</a>
        <a href="#" class=" my-6 block py-2 px-4 font-semibold rounded-lg shadow-md text-black bg-sky-200 hover:bg-sky-500 hover:text-white">Support</a>
      </div>

      <!-- Main content area with three sections -->
      <div class="w-full flex flex-col bg-green-50" @scroll="handleScroll">
        <!-- Top div -->
  <div class="w-full main-bg p-4">
    <p>top</p>
    <div id="map" style="width: 100%; height: 400px;"></div>

          <div class="w-full sm:w-full bg-blue-200 p-5 mt-4">
            <div class="w-full sm:w-full bg-blue-200 p-5 mt-4">
              <table class="styled-table">
                <thead>
                    <tr>
                        <th>Service</th>
                        <th>Description</th> <!-- New field -->
                        <th>Location</th>
                        
                        <th>Date</th>
                        
                        
                        <th>Meeting Time</th> <!-- New field -->
                        <th>Volunteers</th>
                        <th>View</th>
                        <th>Sign-up</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(location, index) in locations" :key="index">
                        <td data-label="Service">{{ location.service }}</td>
                        <td data-label="Service Description">{{ location.service_description }}</td> <!-- New field -->

                        <td data-label="Location">{{ location.place_name }}</td>

                        <td data-label="Date">{{ new Date(location.date).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }) }}</td>
                        <td data-label="Meeting Time">{{ location.meeting_time }}</td> <!-- New field -->
                        <td data-label="Volunteers">{{ location.volunteers }}</td> <!-- Updated to use the volunteers field -->

                        <td data-label="View">
                            <button @click="openViewModal(index)" class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
                                View
                            </button>
                        </td>
                        <td data-label="Sign-up">
                            <button @click="openSignupModal(index)" class="w-fit py-2 px-4 text-xs font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-700">
                                Sign up
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
      class="h-24 bottom-nav fixed bottom-0 w-screen flex justify-between items-center"
      :class="{ 'hidden': hideBottomNav }"
    >

        <button @click="logout" class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-sky-500 hover:bg-sky-700">
          Logout
        </button>

    </div>

    <div v-if="showLoginModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white w-1/2 h-1/2 rounded p-4">
        <LoginView @close="closeLoginModal" />
      </div>
    </div>
  </div>




<div v-if="viewModalIndex !== null && locations[viewModalIndex]" class="fixed inset-0 flex items-center justify-center">
  <div class="fixed inset-0 bg-black bg-opacity-50"></div>
  <div class="absolute w-1/2 mx-auto my-auto bg-white rounded-lg shadow-lg">
    <div class="p-4">
      <div class="flex justify-between">
        <h2 class="text-xl font-semibold">Location Details</h2>
        <button @click="closeViewModal" class="text-gray-600 hover:text-gray-800">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <hr class="my-4">
      <p><span class="font-semibold">Service:</span> {{ locations[viewModalIndex].service }}</p>
      <p><span class="font-semibold">Description:</span> {{ locations[viewModalIndex].service_description }}</p>
      <p><span class="font-semibold">Location:</span> {{ locations[viewModalIndex].place_name }}</p>
      <p><span class="font-semibold">Date:</span> {{ new Date(locations[viewModalIndex].date).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }) }}</p>
      <p><span class="font-semibold">Meeting Time:</span> {{ locations[viewModalIndex].meeting_time }}</p>
      <p><span class="font-semibold">Volunteers:</span> {{ locations[viewModalIndex].volunteers }}</p>
    </div>
  </div>
</div>


  <!-- Confirmation Modal -->
  <div v-if="confirmationModalIndex !== null && locations[confirmationModalIndex]" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-white w-3/4 mx-auto rounded-lg p-8">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-2xl font-bold"><strong>Success!</strong> Service Sign Up</h2>
        <button @click="closeConfirmationModal" class="text-gray-500 hover:text-gray-700">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <p class="text-lg mb-6">You have successfully signed up for {{ locations[confirmationModalIndex].service }}</p>
      <p class="text-lg mb-6">Service Description: {{ locations[confirmationModalIndex].service_description }}</p>
      <p class="text-lg mb-6">Location: {{ locations[confirmationModalIndex].place_name }}</p>
      <p class="text-lg mb-6">Date: {{ new Date(locations[confirmationModalIndex].date).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }) }}</p>
      <p class="text-lg mb-6">Meeting Time: {{ locations[confirmationModalIndex].meeting_time }}</p>
      <p class="text-lg mb-6">Number of Volunteers: {{ locations[confirmationModalIndex].volunteers }}</p>
      <!-- Add more details as needed -->
    </div>
  </div>

  <!-- Your existing sign up modal -->
  <div v-if="signupModalIndex !== null && locations[signupModalIndex]" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-white w-3/4 mx-auto rounded-lg p-8">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-2xl font-bold"><strong>Confirm</strong> Sign Up</h2>
        <button @click="closeSignupModal" class="text-gray-500 hover:text-gray-700">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <p class="text-lg mb-6">Signing up for {{ locations[signupModalIndex].service }}</p>
      <button @click="signupForLocation(signupModalIndex)" class="w-full py-3 px-6 font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-700">
        Sign Up
      </button>
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
      confirmationModalIndex: null,
      map: null,
      locations: [],
      data: [
          { service: 'Service 1', date: 'Date 1', location: 'Location 1', volunteers: 'Volunteers 1' },
          // add more data as needed...
      ],
      viewModalIndex: null,
      signupModalIndex: null,
      isMenuOpen: false,
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

    // Fetch locations from the API
    fetch('http://localhost:8000/api/locations/')
      .then(response => response.json())
      .then(data => {
        // Save the locations in your component's data
        this.locations = data;
        // Add markers to the map for each location
        this.locations.forEach(location => {
          new google.maps.Marker({
            position: { lat: location.latitude, lng: location.longitude },
            map: this.map,
          });
        });
      });


  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleScreenResize);
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    initMap() {
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 32.7767, lng: -96.7970},
        zoom: 8
      });
    },
    getCurrentLocations(){
      // Fetch locations from the API
      fetch('http://localhost:8000/api/locations/')
        .then(response => response.json())
        .then(data => {
          // Save the locations in your component's data
          this.locations = data;
          // Add markers to the map for each location
          this.locations.forEach(location => {
            new google.maps.Marker({
              position: { lat: location.latitude, lng: location.longitude },
              map: this.map,
            });
          });
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
    confirmService(index) {
      this.confirmationModalIndex = index;
      this.closeSignupModal();
    },
    closeConfirmationModal() {
      this.confirmationModalIndex = null;
    },

signupForLocation(index) {
    const location = this.locations[index];
    console.log(location);
    fetch(`http://localhost:8000/api/locations/${location.id}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            ...location,
            volunteers: location.volunteers + 1,
        }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            const updatedLocation = data.location;
            this.locations.splice(index, 1, updatedLocation);
            // close the signup modal
            this.closeSignupModal();
            // open the confirmation modal
            this.confirmService(index);
        } else {
            console.error('Error:', data.error);
        }
    })
    .catch(error => console.error('Error:', error));
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
.dropdown-menu {
  display: none;
  flex-direction: column;
  position: absolute;
  background-color: white;
}

.dropdown-item {
  padding: 1rem;
}

.mobile-nav {
  display: none;
}

@media screen and (max-width: 900px) {
  .desktop-nav {
    display: none;
  }
  .dropdown-menu {
    display: flex;
  }
}

@media screen and (min-width: 900px) {
  .desktop-nav {
    display: flex;
  }
  .mobile-nav {
    display: none;
  }
}
.styled-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    width: 100%;
    background-color: #f0fdf4;
    overflow-x: auto;
}
.styled-table thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
}
.styled-table th,
.styled-table td {
    padding: 12px 15px;
    border-left: 1px solid #009879;
    border-right: 1px solid #009879;
}
.styled-table tbody tr {
    border-bottom: 2px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.styled-table tbody tr:nth-of-type(odd) {
    background-color: #E5EFF7;
}

.styled-table tbody tr:last-of-type {
    border-bottom: 4px solid #009879;
}

.styled-table tbody tr.active-row {
    font-weight: bold;
    color: #009879;
}

.styled-table tbody tr:nth-of-type(even):hover {
    color: #009879;
    transform: scale(1.02);
    transition: all 0.3s ease;
    border-color: white; /* Customize the border color on hover */
  }

.styled-table tbody tr:nth-of-type(odd):hover {
    color: #009879;
    transform: scale(1.02);
    transition: all 0.3s ease;
    border-color: white; /* Customize the border color on hover */

}

@media screen and (max-width: 600px) {
    .styled-table {
        display: block;
    }
    .styled-table thead {
        display: block;
    }
    .styled-table tbody {
        display: block;
    }
    .styled-table thead tr {
        box-sizing: border-box;
        display: block;
        position: absolute;
        top: -9999px;
        left: -9999px;
    }
    .styled-table tr {
        display: block;
        margin-bottom: 0rem;
        
    }
    .styled-table td {
        display: block;
        font-size: .8em;
        line-height: 1.5em;
        text-align: right;
    }

    .styled-table tbody tr:hover {
      color: #009879;
      transform: scale(1.00);
      transition: all 0.3s ease;
    }
    .styled-table td::before {
        content: attr(data-label);
        float: left;
        font-weight: bold;
        text-transform: uppercase;
    }
    .styled-table th,
    .styled-table td {
        padding: 12px 15px;
        border-left: .01rem solid #009879;
        border-right: .01rem solid #009879;
    }
}
.main-bg{
  /* background: #9ac3fa; */
  background-color: #e6ffff;
}

.nav{
  background: #2F74AF; 
}
.side-nav{
  background-image: linear-gradient(to top, #5193CD 50%, #2F74AF);
}
.bottom-nav{
  background-color: #5193CD; 
}
.side-nav-bg-overflow{
  background-color: #5193CD; 
}



</style>
