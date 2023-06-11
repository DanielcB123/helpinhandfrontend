<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    // BandList,
    // AddBand
  },
  data() {
    return {
      showAddBand: false
    };
  },
  methods: {

  }
};
</script>
