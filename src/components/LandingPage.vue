<template>
  <div class="bg-black flex flex-col min-h-screen">
    <div class="w-full bg-animation h-32 flex justify-between items-center border-b-2 border-blue-200">
      <div class="w-28 ml-2">
        <img src="@/assets/images/helpinhand-high-resolution-logo-color-on-transparent-background.png" alt="Logo" />
      </div>
      <button class="mr-4 bg-blue-500 text-white px-4 py-3 rounded" @click="openLoginModal">Login</button>
      <!-- Other top navigation content -->
    </div>
    <div class="flex w-screen flex-grow">
      <div v-if="!isLargeScreen && 0" class="w-36 h-screen bg-cyan-100">side nav</div>
      <div class="w-screen h-auto" @scroll="handleScroll">
        <div class="w-full h-full flex flex-wrap justify-around bg-white pt-10">
            <div class="bg-white rounded border border-sky-300 w-2/5 h-96 bg-sky-50">
              
            </div>
            <div class="bg-white rounded border border-sky-300 w-2/5 h-96 bg-sky-50">
              
            </div>
            
        </div>
          <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dolor metus, convallis id feugiat quis, finibus vel dolor. Nunc semper arcu leo, fermentum auctor turpis pretium quis. Duis lacinia, lacus sed porttitor laoreet, diam est interdum lacus, id consectetur est sapien eu mauris. Mauris a sem enim. Nullam vel fermentum justo, id feugiat est. Suspendisse ac sodales metus, ac consectetur diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean nec nulla aliquam, fringilla ipsum at, ornare odio. Curabitur vel dignissim erat. Nulla et purus quis ligula pretium iaculis. Etiam iaculis, magna ac facilisis elementum, quam mauris scelerisque lacus, non laoreet purus nunc laoreet diam. Donec ac ante vel ligula porta sollicitudin vitae vitae massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam placerat iaculis tellus, et imperdiet lacus interdum eget.

  Proin vel nisi ut nulla posuere varius sagittis nec lorem. Curabitur eu elit ipsum. Sed placerat, ante venenatis aliquam accumsan, libero massa viverra magna, vel ullamcorper libero libero at nulla. Mauris accumsan consequat accumsan. Nullam sed velit posuere, vulputate leo eu, molestie lacus. Aliquam erat volutpat. Maecenas sit amet eleifend felis. Ut posuere tincidunt elit, vel consectetur enim vestibulum id. Maecenas malesuada tortor quis nunc mattis ullamcorper.

  Suspendisse ultricies mauris vitae augue pharetra, a egestas odio laoreet. Vivamus porttitor felis arcu. Nulla enim lorem, euismod lobortis eros id, vestibulum cursus nulla. In commodo accumsan aliquam. Praesent erat nulla, bibendum id quam non, scelerisque accumsan purus. Morbi eu ex non metus vehicula tempus vel at purus. Donec laoreet tincidunt vulputate. Nunc faucibus, nisl ac semper egestas, est magna condimentum lacus, vel pretium ligula mauris sed ligula. In facilisis ornare quam, in eleifend ligula porttitor ornare. In nec odio augue. Nam quis turpis ipsum. Vivamus tincidunt convallis feugiat.

  Ut massa mauris, euismod nec congue eu, venenatis eget augue. Vivamus ultricies libero sed pellentesque porta. Sed hendrerit a sapien id mattis. Duis sit amet ipsum molestie, egestas mauris vitae, condimentum lectus. In ultricies nunc et ipsum placerat eleifend. Vestibulum placerat, libero nec lobortis porttitor, lorem velit auctor metus, sed mollis nisi eros a metus. Ut id mauris ultricies, varius mauris eu, faucibus orci. Morbi ullamcorper rhoncus dolor eget pharetra.

  Morbi maximus rhoncus leo sed eleifend. Proin vitae est imperdiet, blandit tellus eu, interdum leo. Sed sodales elit sit amet erat aliquet vulputate. Integer id nibh mollis, faucibus tortor ac, scelerisque nisl. Donec sit amet lacinia purus. Aenean sed turpis tortor. Duis id ipsum in velit fringilla pulvinar ac at ligula. Suspendisse pharetra non arcu id convallis. Nunc risus augue, fermentum a lectus eu, iaculis rutrum dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dolor metus, convallis id feugiat quis, finibus vel dolor. Nunc semper arcu leo, fermentum auctor turpis pretium quis. Duis lacinia, lacus sed porttitor laoreet, diam est interdum lacus, id consectetur est sapien eu mauris. Mauris a sem enim. Nullam vel fermentum justo, id feugiat est. Suspendisse ac sodales metus, ac consectetur diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean nec nulla aliquam, fringilla ipsum at, ornare odio. Curabitur vel dignissim erat. Nulla et purus quis ligula pretium iaculis. Etiam iaculis, magna ac facilisis elementum, quam mauris scelerisque lacus, non laoreet purus nunc laoreet diam. Donec ac ante vel ligula porta sollicitudin vitae vitae massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam placerat iaculis tellus, et imperdiet lacus interdum eget.

  Proin vel nisi ut nulla posuere varius sagittis nec lorem. Curabitur eu elit ipsum. Sed placerat, ante venenatis aliquam accumsan, libero massa viverra magna, vel ullamcorper libero libero at nulla. Mauris accumsan consequat accumsan. Nullam sed velit posuere, vulputate leo eu, molestie lacus. Aliquam erat volutpat. Maecenas sit amet eleifend felis. Ut posuere tincidunt elit, vel consectetur enim vestibulum id. Maecenas malesuada tortor quis nunc mattis ullamcorper.

  Suspendisse ultricies mauris vitae augue pharetra, a egestas odio laoreet. Vivamus porttitor felis arcu. Nulla enim lorem, euismod lobortis eros id, vestibulum cursus nulla. In commodo accumsan aliquam. Praesent erat nulla, bibendum id quam non, scelerisque accumsan purus. Morbi eu ex non metus vehicula tempus vel at purus. Donec laoreet tincidunt vulputate. Nunc faucibus, nisl ac semper egestas, est magna condimentum lacus, vel pretium ligula mauris sed ligula. In facilisis ornare quam, in eleifend ligula porttitor ornare. In nec odio augue. Nam quis turpis ipsum. Vivamus tincidunt convallis feugiat.

  Ut massa mauris, euismod nec congue eu, venenatis eget augue. Vivamus ultricies libero sed pellentesque porta. Sed hendrerit a sapien id mattis. Duis sit amet ipsum molestie, egestas mauris vitae, condimentum lectus. In ultricies nunc et ipsum placerat eleifend. Vestibulum placerat, libero nec lobortis porttitor, lorem velit auctor metus, sed mollis nisi eros a metus. Ut id mauris ultricies, varius mauris eu, faucibus orci. Morbi ullamcorper rhoncus dolor eget pharetra.

  Morbi maximus rhoncus leo sed eleifend. Proin vitae est imperdiet, blandit tellus eu, interdum leo. Sed sodales elit sit amet erat aliquet vulputate. Integer id nibh mollis, faucibus tortor ac, scelerisque nisl. Donec sit amet lacinia purus. Aenean sed turpis tortor. Duis id ipsum in velit fringilla pulvinar ac at ligula. Suspendisse pharetra non arcu id convallis. Nunc risus augue, fermentum a lectus eu, iaculis rutrum dolor. -->
      </div>
    </div>
    <div
      class="h-32 fixed bottom-0 w-screen flex justify-between items-center bg-sky-300"
      :class="{ 'hidden': hideBottomNav }"
    >
      <div class="w-28 ml-2">
        <img src="@/assets/images/helpinhand-high-resolution-logo-color-on-transparent-background.png" alt="Logo" />
      </div>

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
import logo from '@/assets/images/logo.png';

export default {
  data() {
    return {
      isLargeScreen: true,
      hideBottomNav: false,
      scrollTimer: null,
      prevScrollY: 0,
      showLoginModal: false,
      logo: logo
    };
  },


  beforeRouteEnter(to, from, next) {
    document.title = to.meta.title;
    next();
  },
  beforeRouteUpdate(to, from, next) {
    document.title = to.meta.title;
    next();
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
      this.isLargeScreen = (window.innerWidth >= 768 || window.scrollY === 0) ;
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

.bg-animation {
  /* background: linear-gradient(to right, #47668f 0%, #5275a3 50%, #47668f 100%); */
  background: linear-gradient(to right, #71a0dd 0%, #86b9fd 50%, #71a0dd 100%);
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
</style>
