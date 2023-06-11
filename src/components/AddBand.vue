<template>
  <div>
    <h1>Add a Band</h1>

    <input v-model="band.name" placeholder="Band Name">
    <input v-model="band.genre" placeholder="Genre">
    <input v-model="band.formed_date" placeholder="Formed Date (YYYY-MM-DD)">
    <button @click="addBand">Add Band</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      band: {
        name: '',
        genre: '',
        formed_date: '', // New field for formed_date
      }
    }
  },
  methods: {
    async addBand() {
      try {
        const response = await axios.post('http://localhost:8000/api/bands/', this.band);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>
