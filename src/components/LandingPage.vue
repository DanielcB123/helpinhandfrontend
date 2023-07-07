
<template>
<div class="w-screen h-auto no-scrollbar" @scroll="handleScroll">

  <div class="bg-#86b9fd flex flex-col min-h-screen">
    <head>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
    </head>

    <!-- DESKTOP NAV -->
    <div class="hidden w-full bg-animation h-32 sm:flex justify-between items-center border-b-2 border-blue-200">
      <div class="circle-div w-auto ml-2 hidden md:flex md:text-sm bg-sky-100">
        <img class="circle-img" src="@/assets/images/logo4.png" alt="Logo" />
      </div>
      <!-- <div class="w-full flex justify-start"> -->
        <span class="navtext">HelpinHand</span>  
      <!-- </div> -->
      <div class="button-container flex justify-end px-2">
        <button class="mr-4 bg-sky border-b border-l border-r border-#71a0dd text-white sm:px-4 px-2 py-3 rounded" @click="changeSection('home')">Home</button>
        <button class="mr-4 bg-sky border-b border-l border-r border-#71a0dd text-white sm:px-4 px-2 py-3 rounded" @click="changeSection('about')">About</button>
        <button class="mr-4 bg-sky border-b border-l border-r border-#71a0dd text-white sm:px-4 px-2 py-3 rounded" @click="changeSection('about')">How It Works?</button>
        <button class="mr-4 bg-sky border-b border-l border-r border-#71a0dd text-white sm:px-4 px-2 py-3 rounded" @click="openRegisterModal">Sign Up</button>
        <button class="mr-4 bg-red-500 bg-blue-500 border border-white hover:bg-blue-600 text-white sm:px-4 px-2 py-3 rounded" @click="openLoginModal">Login</button>
      </div>
      <!-- Other top navigation content -->
    </div>


  <!-- MOBILE NAV -->
  <div class="flex sm:hidden w-full bg-animation h-32 justify-between items-center border-b-2 border-blue-200">
    <div class="circle-div w-auto ml-2 flex md:flex md:text-sm bg-sky-100">
      <img class="circle-img" src="@/assets/images/logo4.png" alt="Logo" />
    </div>
    <span class="mr-6 flex sm:hidden text-3xl" style="font-family: 'Kaushan Script', cursive;color: #2b7097;">HelpinHand</span>

    <!-- Hamburger Menu -->
    <div @click="toggleNav" class="mr-12 cursor-pointer px-2 py-1">
      <div class="hamburger-menu" :class="{'open': navOpen}">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>


    <!-- Dropdown Menu -->
    <div v-if="navOpen" :key="menuKey" class="fixed z-100 top-0 mt-32 right-0 w-48 py-2 bg-white rounded-lg shadow-xl">
      <button class="block w-full px-4 py-2 text-sm text-left" @click="toggleNav();changeSection('home')">Home</button>
      <button class="block w-full px-4 py-2 text-sm text-left" @click="toggleNav();changeSection('about')">About</button>
      <button class="block w-full px-4 py-2 text-sm text-left" @click="toggleNav();changeSection('about')">How It Works?</button>
      <button class="block w-full px-4 py-2 text-sm text-left" @click="openRegisterModal()">Sign Up</button>
      <button class="block w-full px-4 py-2 text-sm text-left" @click="openLoginModal();toggleNav();">Login</button>
    </div>


  </div>








    <div v-if="visibleSection === 'image1'">
      <image-one></image-one>
    </div>







    <!-- HOME -->
    <transition name="fade"  mode="out-in">
      <div v-if="visibleSection === 'home'"  class="w-screen bg-white">
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

              <div class="bg-white md:w-1/2 h-96 p-5 flex items-center justify-center flex-col">
                <span class="main-header sm:text-xl md:text-xl lg:text-2xl mr-5" style="font-family: 'Montserrat', sans-serif; color: #558cd3;">
                  HelpinHand's mission is to connect individuals in need with compassionate volunteers, fostering a culture of altruism and community support. Through our user-friendly platform, we inspire acts of kindness, bridge the gap between people, and create a world where helping others is a fundamental part of everyday life. Join the HelpinHand community and be a part of this powerful movement of compassion.
                </span>
              </div>

            </div>


            <div class="w-full pl-3 pr-12 sm:pr-8">
              <div class="w-full border-t border-blue-200 mt-8 pb-5"></div>
              <div class="-mr-5" v-if="isSmallScreen">
                <image-carousel @image-clicked="handleImageClick"></image-carousel>
              </div>

              <div class="" v-else>
                <mobile-image-carousel  @image-clicked="handleImageClick"></mobile-image-carousel>
              </div>




<div class="mt-6 w-full h-28 custom-sky flex justify-center  items-center">
  <h6 class="text-8xl text-white" style="font-family: 'Kaushan Script', cursive;">Connect</h6>
</div>
<!-- <div class="mt-6 w-full h-24 bg-sky-100 flex justify-center items-center">
  <h6 class="w-full">Connect</h6>
</div> -->


  <div class="half-screen" ref="container">

<h1 class="absolute w-full flex justify-center text-2xl text-white">Testimonials</h1>
<div class="ml-0 w-full h-auto m-12 p-3 rounded absolute md:flex md:justify-around">

<div class="w-full md:w-1/4 p-5 my-2 rounded-md bg-white bg-opacity-50 z-100">
    <h1 style="color: #333; font-size: 24px; text-align: center;">"A Life-Altering Experience"</h1>
    <p style="font-size: 16px; color: #666; line-height: 1.5; text-align: justify;">
      "Joining the HelpinHand community has been a life-altering experience. Not only have I had the privilege to help those in need, but I've also made connections with some of the kindest, most compassionate individuals. This platform truly embodies the spirit of community and altruism."    </p>
</div>
<div class="w-full md:w-1/4 p-5 my-2 rounded-md bg-white bg-opacity-50 z-100">
    <h1 style="color: #333; font-size: 24px; text-align: center;">"A Ripple Effect of Kindness"</h1>
    <p style="font-size: 16px; color: #666; line-height: 1.5; text-align: justify;">
      "HelpinHand has offered me an incredible platform to lend a helping hand to those in need. It's beautifully user-friendly and makes volunteering so accessible. I feel part of a larger movement, a ripple effect of kindness and compassion that starts right here!"    </p>
</div>
<div class="w-full md:w-1/4 p-5 my-2 rounded-md bg-white bg-opacity-50 z-100">
    <h1 style="color: #333; font-size: 24px; text-align: center;">"Fostering the Spirit of Service"</h1>
    <p style="font-size: 16px; color: #666; line-height: 1.5; text-align: justify;">
      "Being a part of HelpinHand's community has added immense value to my life. The feeling of making a positive impact on someone's life is simply unparalleled. The platform seamlessly bridges the gap between individuals, making it easy to offer help where it's needed most. A big thumbs up to HelpinHand for fostering this spirit of service!"    </p>
</div>
</div>



    <svg :width="width" :height="height">
      <path
        v-for="arc in arcs"
        :key="arc.id"
        :d="arc.d"
        stroke="white"
        fill="none"
        stroke-width="0.5"
        class="arc-path"
        :class="{ 'arc-animation': arc.active }"
      />
    </svg>
    
    <div
      v-for="point in points"
      :key="point.id"
      :style="{
        top: `${point.y}px`,
        left: `${point.x}px`,
      }"
      class="point"
    />
  </div>






            </div>
          </div>
        </div>

<div class="mt-16 w-auto h-64 flex justify-center items-center ml-3 mr-8 mt-12">
  <h6 class="text-8xl text-white" style="font-family: 'Kaushan Script', cursive;">


<!-- Need to make footer a component to import -->
    <footer class="footer bg-footer text-white">
        <div class="footer-section">
            <h2 class="footer-title">About HelpinHand</h2>
            <p>HelpinHand's mission is to connect individuals in need with compassionate volunteers, fostering a culture of altruism and community support.</p>
        </div>
        <div class="footer-section">
            <h2 class="footer-title">Quick Links</h2>
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">Contact Us</a>
        </div>
        <div class="footer-section">
            <h2 class="footer-title">Legal</h2>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
        </div>
        <div class="footer-section">
            <h2 class="footer-title">Contact Us</h2>
            <p>123 HelpinHand St.</p>
            <p>City, ST 12345</p>
            <p>contact@helpinhand.com</p>
        </div>
    </footer>

  </h6>
</div>

      </div>
    </transition>






    <!-- ABOUT -->
<transition name="fade"  mode="out-in">
    <div v-if="visibleSection === 'about'" class="w-screen bg-white">
        <div v-if="!isLargeScreen && 0" class="w-36 h-screen bg-cyan-100">side nav</div>
        <div class="w-screen h-[50vh]" @scroll="handleScroll">
            <div class="w-full h-auto flex flex-wrap justify-around bg-white px-8 py-16">
                <div class="w-full md:w-1/4">
                    <img  src="@/assets/images/danpic.jpg" alt="Daniel Burgess" class="w-full h-auto rounded-full mb-8">
                </div>

                <div class="w-full md:w-1/2 md:pl-8">
                    <h2 class="font-semibold text-3xl mb-4 text-sky-700">About Us</h2>
                    <p class="text-gray-600 mb-4 leading-relaxed">
                        <span class="text-lg font-semibold">HelpinHand</span>, established by Daniel Burgess, aims to build bridges between empathetic volunteers and those who require assistance, cultivating an environment of mutual aid and community engagement.
                    </p>
                    <p class="text-gray-600 mb-4 leading-relaxed">
                        We are firm believers in the power of kindness. Our commitment to eliminating barriers among individuals distinguishes us in our field.
                    </p>
                    <p class="text-gray-600 leading-relaxed">
                        With an unwavering emphasis on developing an accessible platform, we are devoted to effecting positive change by fostering a society where lending a helping hand is a norm, not an exception.
                    </p>
                </div>





            </div>
        </div>
<div class="mt-6 w-auto h-64 bg-animation flex justify-center items-center ml-3 mr-8 mt-12">
  <h6 class="text-8xl text-white" style="font-family: 'Kaushan Script', cursive;">


<!-- Need to make footer a component to import -->
    <footer class="footer bg-footer text-white">
        <div class="footer-section">
            <h2 class="footer-title">About HelpinHand</h2>
            <p>HelpinHand's mission is to connect individuals in need with compassionate volunteers, fostering a culture of altruism and community support.</p>
        </div>
        <div class="footer-section">
            <h2 class="footer-title">Quick Links</h2>
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">Contact Us</a>
        </div>
        <div class="footer-section">
            <h2 class="footer-title">Legal</h2>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
        </div>
        <div class="footer-section">
            <h2 class="footer-title">Contact Us</h2>
            <p>123 HelpinHand St.</p>
            <p>City, ST 12345</p>
            <p>contact@helpinhand.com</p>
        </div>
    </footer>

  </h6>
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



<!-- LOGIN -->
    <transition name="slide">
      <div v-if="showLoginModal" class="fixed inset-0 flex items-center justify-center z-10">
        <div class="bg-white w-5/6 sm:w-1/3 h-1/2 rounded p-4">
          <LoginView @close="closeLoginModal" />
        </div>
      </div>
    </transition>
    <transition name="modal-bg-fade">
      <div v-if="showLoginModal" class="fixed inset-0 bg-black bg-opacity-50 modal-bg-fade"></div>
    </transition>



<!-- REGISTER -->
    <transition name="slide">
      <div v-if="showRegisterModal" class="fixed inset-0 flex items-center justify-center z-10">
        <div class="h-auto  bg-white w-5/6 sm:w-1/3 h-1/2 rounded p-4">
          <RegisterView @close="closeRegisterModal" />
        </div>
      </div>
    </transition>
    <transition name="modal-bg-fade">
      <div v-if="showRegisterModal" class="fixed inset-0 bg-black bg-opacity-50 modal-bg-fade"></div>
    </transition>


  </div>
</div>
</template>

<script>
import LoginView from '@/components/LoginView.vue';
import RegisterView from '@/components/RegisterView.vue';
import logo from '@/assets/images/logo2.png';
import ImageCarousel from './ImageCarousel.vue';  // adjust the path based on your project structure
import MobileImageCarousel from './MobileImageCarousel.vue'; 
import ImageOne from './ImageOne.vue'; 
import { uniqBy, random } from 'lodash';
// import logo from '@/assets/images/logo2.png';
// import logo from '@/assets/images/help_stairs.jpg';
export default {
  data() {
    return {
      width: 0,
      height: 0,
      points: [],
      arcs: [],


      isLargeScreen: true,
      hideBottomNav: false,
      scrollTimer: null,
      prevScrollY: 0,
      showLoginModal: false,
      showRegisterModal: false,
      logo: logo,
      visibleSection: 'home',
      windowWidth: 0,
      currentSlideIndex: 0,
      navOpen: false,
      menuKey: 0,
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


    this.width = this.$refs.container.offsetWidth;
    this.height = this.$refs.container.offsetHeight;
    this.generatePoints();
    this.createArcs();
    this.animateRandomArcs();
    setInterval(() => {
      this.animateRandomArcs();
    }, 10000);

  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleScreenResize);
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {

    generatePoints() {
      for (let i = 0; i < 30; i++) {
        this.points.push({
          id: i,
          x: random(0, this.width),
          y: random(0, this.height),
        });
      }
    },
    createArcs() {
      for (let i = 0; i < this.points.length; i++) {
        for (let j = i + 1; j < this.points.length; j++) {
          const start = this.points[i];
          const end = this.points[j];
          const dx = end.x - start.x;
          const dy = end.y - start.y;
          const dr = Math.sqrt(dx * dx + dy * dy);
          const d = `M${start.x},${start.y}A${dr},${dr} 0 0,1 ${end.x},${end.y}`;

          this.arcs = uniqBy(
            [
              ...this.arcs,
              {
                id: `${start.id}-${end.id}`,
                d,
                active: false,
              },
            ],
            'id'
          );
        }
      }
    },
    animateRandomArcs() {
      this.arcs = this.arcs.map(arc => ({
        ...arc,
        active: Math.random() < 0.2,
      }));
    },






    handleImageClick(imageNumber) {
      console.log(`Image ${imageNumber} component`);
      this.visibleSection = `image${imageNumber}`;


      // Handle the click event
    },
    toggleNav() {
      console.log(this.navOpen);
      this.navOpen = !this.navOpen;
      this.menuKey++; // Increment key here
    },
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
    openRegisterModal() {
      this.showRegisterModal = true;
    },
    closeLoginModal() {
      this.showLoginModal = false;
    },
    closeRegisterModal() {
      this.showRegisterModal = false;
    },
    changeSection(newSection) {
      // First, set the current section to null to hide it
      this.visibleSection = null;

      // Then, use $nextTick to wait until the DOM update (and thus the fade out) is complete
      this.$nextTick(() => {
        // Use a JavaScript timeoMobileImageCarouselut to add a slight delay
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
    RegisterView,
    ImageCarousel,
    MobileImageCarousel,
    ImageOne,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');
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


.circle-div {
  font-family: 'Montserrat', sans-serif;
  color: #558ad3;
  border: 3px solid #558ad3; /* adjust border thickness as desired */
  border-radius: 50%;
  overflow: hidden;
}


.circle-img {
  width: 7rem;
  height: 7rem;
  object-fit: cover;
}

.navtext{
  margin-right:25%;
  width:25%;
  font-family: 'Kaushan Script', cursive;
  /* color: #558cd3; */
  color: #2b7097;
  font-size: 5rem;
}

@media (max-width: 1200px) {
  .navtext{
    margin-right:15%;
    width:25%;
    font-family: 'Kaushan Script', cursive;
    /* color: #558cd3; */
    color: #2b7097;
    font-size: 3rem;
  }
}
@media (max-width: 1000px) {
  .navtext{
    margin-right:10%;
    width:25%;
    font-family: 'Kaushan Script', cursive;
    /* color: #558cd3; */
    color: #2b7097;
    font-size: 3rem;
  }
}
@media (max-width: 900px) {
  .navtext{
    margin-right:-10%;
    width:25%;
    font-family: 'Kaushan Script', cursive;
    /* color: #558cd3; */
    color: #2b7097;
    font-size: 1.5rem;
  }
}
@media (max-width: 600px) {
  .navtext{
    visibility: hidden;
  }
}


/* MOBILE NAV HAMBURGER */
.hamburger-menu {
  width: 2rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  transition: all 0.3s linear;
  cursor: pointer;
}

.hamburger-menu .line {
  width: 2rem;
  height: 0.25rem;
  background-color: #ffffff;
  transition: all 0.3s linear;
}

.hamburger-menu.open .line:nth-child(1) {
  transform: rotate(-45deg) translate(-9px, 6px);
}

.hamburger-menu.open .line:nth-child(2) {
  opacity: 0;
}

.hamburger-menu.open .line:nth-child(3) {
  transform: rotate(45deg) translate(-9px, -6px);
}



.custom-sky{
  background: #9ac3fa;
}

.half-screen {
  margin-top: 2rem;
  width: 100%;
  height: 50vh;
  background: #9ac3fa;
  position: relative;
}
@media (max-width: 1086px) {
  .half-screen {
    height: 80vh;
    margin-bottom:2rem;
  }
}
@media (max-width: 786px) {
  .half-screen {
    height: 80vh;
    margin-bottom:2rem;
  }
}

.point {
  position: absolute;
  width: 5px;
  height: 5px;
  background: #ffffff;
  border-radius: 50%;
}

.arc-path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
}

.arc-animation {
  animation: dash 10s linear infinite;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
.footer {
    background-color: #f2f2f2;
    padding: 20px;
    color: white;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.footer-section {
    margin: 20px;
    font-size: 16px;
}
.footer-title {
    font-weight: bold;
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
}
.footer-section a {
    color: white;
    text-decoration: none;
    display: block;
    margin-bottom: 5px;
}
.footer-section a:hover {
    text-decoration: underline;
}
.bg-footer {
    /* background-color: #3f6088; */
    background-color: #577dac;
}

</style>


