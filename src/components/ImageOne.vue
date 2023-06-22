<template>
  <div class="bg-blue-500">
Image 1
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async register() {
      const response = await axios.post('http://localhost:8000/api/users/', {
        username: this.username,
        password: this.password
      });
      console.log(response.data);
    }
  }
}
</script>
