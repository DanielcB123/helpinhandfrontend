<template>
  <div>
    <div class="text-center py-4">
        <h1 class="text-3xl text-blue-500">Hello, World!</h1>
    </div>
    <div v-for="band in bands" :key="band.id">
      <h2>{{ band.name }}</h2>
      <p>Formed: {{ band.formed_date }}</p>
      <p>Genre: {{ band.genre }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      bands: [],
    };
  },
  async created() {
    const response = await axios.get('http://localhost:8000/api/bands/');
    this.bands = response.data;
  },
};
</script>
