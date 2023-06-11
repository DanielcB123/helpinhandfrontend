<template>
  <div class="bg-black flex flex-col min-h-screen">
    <div class="w-full bg-sky-300 h-20">top nav</div>
    <div class="flex w-screen flex-grow">
      <div v-if="isLargeScreen" class="w-36 h-screen bg-cyan-100">side nav</div>
      <div class="w-screen h-auto bg-green-50" @scroll="handleScroll">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a sem eu risus condimentum bibendum nec at urna. Vestibulum a ornare nisi. Maecenas nec risus consectetur, cursus ligula et, venenatis leo. Vivamus lacus dolor, ullamcorper nec volutpat id, consectetur in sapien. Vivamus sagittis dui in diam imperdiet commodo. Vestibulum turpis augue, condimentum quis sodales id, interdum a erat. Maecenas ullamcorper tellus in nisi tempor aliquam. Praesent ac luctus lorem. Duis sapien erat, eleifend sit amet viverra in, dictum vel mi.

Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer nec consectetur magna. Donec maximus ac neque at dictum. In blandit in eros in mattis. Integer lobortis lacus sed risus bibendum rhoncus vel ut metus. Integer posuere est ullamcorper, tristique sapien a, eleifend neque. Aenean vitae odio quis augue mattis laoreet consectetur vitae libero.

Nullam iaculis augue sapien, sed euismod libero congue vitae. Aliquam massa augue, vehicula a sem vulputate, iaculis eleifend turpis. Fusce blandit non lorem id consectetur. Nullam porttitor ullamcorper neque, non ullamcorper neque bibendum sed. Fusce accumsan pellentesque dui, vel iaculis ex eleifend ut. Nunc suscipit accumsan nisl vel dignissim. Morbi auctor nibh vel felis consequat, iaculis viverra urna blandit. Ut ac velit posuere, fermentum tortor eget, vestibulum dolor. Mauris tempus, nulla ut porttitor feugiat, neque tellus eleifend tortor, vel viverra purus nulla sit amet lorem. Integer suscipit sollicitudin mattis. Suspendisse gravida mauris quis mauris suscipit, quis blandit sapien laoreet.

Vivamus egestas congue diam rhoncus ultricies. Mauris egestas interdum turpis, faucibus tempus tellus ullamcorper sodales. Praesent nisi nunc, volutpat eget tristique ac, tempus nec elit. Etiam rutrum, ex id congue gravida, lacus magna sodales purus, ut luctus ipsum sapien ut nisl. Vivamus feugiat lorem porta, egestas enim quis, hendrerit orci. Morbi placerat imperdiet nunc sed tincidunt. Vestibulum in lectus id tortor venenatis rhoncus ac at leo. Donec euismod ligula ut felis pretium pretium. Fusce scelerisque urna velit, in pretium sapien interdum sed. Maecenas eget mi sem. Vivamus ut cursus orci, id laoreet nulla. Vivamus porttitor tempus nunc et fringilla. Quisque odio lectus, feugiat eget malesuada id, hendrerit in tellus. Duis vel risus aliquet, commodo orci quis, consequat odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

Nulla facilisi. Sed elementum sed orci sed malesuada. Nam malesuada tempor orci, eu molestie sem. Nunc iaculis enim ut orci molestie, id pretium ligula tincidunt. Pellentesque quis felis vitae nisl ultrices feugiat. Mauris molestie purus ut tempus ullamcorper. Quisque facilisis nibh ac dolor accumsan, bibendum viverra dui tristique. Nulla laoreet mollis cursus. Donec blandit, leo in placerat semper, tortor orci ornare tellus, id suscipit sem diam at est. Fusce dui lorem, egestas vitae molestie ut, cursus vitae elit. Quisque pellentesque dictum mi eget placerat. Proin convallis, lorem vitae blandit cursus, metus neque tempus nisi, quis rutrum magna nisl a tortor. Proin quis sem feugiat, scelerisque nunc in, facilisis est. Nam ut euismod ligula. Pellentesque commodo at turpis nec semper. Cras vehicula iaculis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a sem eu risus condimentum bibendum nec at urna. Vestibulum a ornare nisi. Maecenas nec risus consectetur, cursus ligula et, venenatis leo. Vivamus lacus dolor, ullamcorper nec volutpat id, consectetur in sapien. Vivamus sagittis dui in diam imperdiet commodo. Vestibulum turpis augue, condimentum quis sodales id, interdum a erat. Maecenas ullamcorper tellus in nisi tempor aliquam. Praesent ac luctus lorem. Duis sapien erat, eleifend sit amet viverra in, dictum vel mi.

Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer nec consectetur magna. Donec maximus ac neque at dictum. In blandit in eros in mattis. Integer lobortis lacus sed risus bibendum rhoncus vel ut metus. Integer posuere est ullamcorper, tristique sapien a, eleifend neque. Aenean vitae odio quis augue mattis laoreet consectetur vitae libero.

Nullam iaculis augue sapien, sed euismod libero congue vitae. Aliquam massa augue, vehicula a sem vulputate, iaculis eleifend turpis. Fusce blandit non lorem id consectetur. Nullam porttitor ullamcorper neque, non ullamcorper neque bibendum sed. Fusce accumsan pellentesque dui, vel iaculis ex eleifend ut. Nunc suscipit accumsan nisl vel dignissim. Morbi auctor nibh vel felis consequat, iaculis viverra urna blandit. Ut ac velit posuere, fermentum tortor eget, vestibulum dolor. Mauris tempus, nulla ut porttitor feugiat, neque tellus eleifend tortor, vel viverra purus nulla sit amet lorem. Integer suscipit sollicitudin mattis. Suspendisse gravida mauris quis mauris suscipit, quis blandit sapien laoreet.

Vivamus egestas congue diam rhoncus ultricies. Mauris egestas interdum turpis, faucibus tempus tellus ullamcorper sodales. Praesent nisi nunc, volutpat eget tristique ac, tempus nec elit. Etiam rutrum, ex id congue gravida, lacus magna sodales purus, ut luctus ipsum sapien ut nisl. Vivamus feugiat lorem porta, egestas enim quis, hendrerit orci. Morbi placerat imperdiet nunc sed tincidunt. Vestibulum in lectus id tortor venenatis rhoncus ac at leo. Donec euismod ligula ut felis pretium pretium. Fusce scelerisque urna velit, in pretium sapien interdum sed. Maecenas eget mi sem. Vivamus ut cursus orci, id laoreet nulla. Vivamus porttitor tempus nunc et fringilla. Quisque odio lectus, feugiat eget malesuada id, hendrerit in tellus. Duis vel risus aliquet, commodo orci quis, consequat odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

Nulla facilisi. Sed elementum sed orci sed malesuada. Nam malesuada tempor orci, eu molestie sem. Nunc iaculis enim ut orci molestie, id pretium ligula tincidunt. Pellentesque quis felis vitae nisl ultrices feugiat. Mauris molestie purus ut tempus ullamcorper. Quisque facilisis nibh ac dolor accumsan, bibendum viverra dui tristique. Nulla laoreet mollis cursus. Donec blandit, leo in placerat semper, tortor orci ornare tellus, id suscipit sem diam at est. Fusce dui lorem, egestas vitae molestie ut, cursus vitae elit. Quisque pellentesque dictum mi eget placerat. Proin convallis, lorem vitae blandit cursus, metus neque tempus nisi, quis rutrum magna nisl a tortor. Proin quis sem feugiat, scelerisque nunc in, facilisis est. Nam ut euismod ligula. Pellentesque commodo at turpis nec semper. Cras vehicula iaculis </div>
    </div>
    <div
      class="h-24 bg-green-500 fixed bottom-0 w-screen"
      :class="{ 'hidden': hideBottomNav }"
    >
      bottom nav
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLargeScreen: true,
      hideBottomNav: false,
      scrollTimer: null,
      prevScrollY: 0
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
      this.hideBottomNav = window.innerWidth >= 768
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
    }
  }
};
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}
.hidden {
  display: none;
}
</style>
